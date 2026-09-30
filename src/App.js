import React, { useEffect, useState } from 'react';
import './App.css';
import StatCards from './components/StatCards';
import LogStream from './components/LogStream';
import PipelineView from './components/PipelineView';
import RecentRuns from './components/RecentRuns';
import MetaPanel from './components/MetaPanel';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/pipeline-data.json?t=' + Date.now());
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const json = await res.json();
        setData(json);
        setLastUpdate(new Date());
        setError(null);
      } catch (e) {
        setError(e.message);
      }
    };
    load();
    const interval = setInterval(load, 30000);
    return () => clearInterval(interval);
  }, []);

  if (!data) {
    return (
      <div className="app loading">
        <div className="loader" />
        <p>Loading pipeline data…</p>
        {error && <p className="error">Error: {error}</p>}
      </div>
    );
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-left">
          <span className="dot" />
          <h1>CLOUD-NATIVE REACTOPS PIPELINE</h1>
        </div>
        <div className="header-right">
          <span className="live-badge">● LIVE</span>
          <span className="last-update">
            {lastUpdate && lastUpdate.toLocaleTimeString()}
          </span>
        </div>
      </header>

      <section className="stats">
        <StatCards stats={data.stats} image={data.image} />
      </section>

      <section className="main-grid">
        <div className="panel log-panel">
          <div className="panel-header">
            <h2>Live Stream</h2>
            <span className="run-info">
              Run #{data.ci.runNumber} · {data.lastCommit.shortSha}
            </span>
          </div>
          <LogStream stages={data.stages} startedAt={data.ci.startedAt} />
        </div>

        <div className="panel pipeline-panel">
          <div className="panel-header">
            <h2>Pipeline</h2>
            <span className={`status ${data.ci.status}`}>{data.ci.status}</span>
          </div>
          <PipelineView stages={data.stages} />
          <div className="commit-info">
            <p><strong>{data.lastCommit.shortSha}</strong> — {data.lastCommit.message}</p>
            <p className="dim">by {data.lastCommit.author}</p>
          </div>
        </div>
      </section>

      <section className="bottom-grid">
        <div className="panel meta-panel">
          <div className="panel-header">
            <h2>Build Metadata</h2>
          </div>
          <MetaPanel data={data} />
        </div>

        <div className="panel recent-panel">
          <div className="panel-header">
            <h2>Recent Runs</h2>
          </div>
          <RecentRuns runs={data.recentRuns} />
        </div>
      </section>

      <footer className="footer">
        <span>Image: {data.image.name}:{data.image.tag}</span>
        <span>·</span>
        <span>{data.image.sizeMB} MB</span>
        <span>·</span>
        <a href={`https://github.com/${data.repository}`} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <span>·</span>
        <a href={data.deployment.url} target="_blank" rel="noreferrer">
          Live
        </a>
      </footer>
    </div>
  );
}

export default App;