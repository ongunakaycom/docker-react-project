import React, { useEffect, useRef, useState } from 'react';

export default function LogStream({ stages, startedAt }) {
  const [visible, setVisible] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    setVisible([]);
    const start = new Date(startedAt).getTime();
    let elapsed = 0;
    let i = 0;

    const interval = setInterval(() => {
      if (i >= stages.length) {
        clearInterval(interval);
        return;
      }
      const stage = stages[i];
      const t = new Date(start + elapsed * 1000);
      setVisible((prev) => [
        ...prev,
        {
          time: t.toTimeString().slice(0, 8),
          name: stage.name,
          conclusion: stage.conclusion,
          duration: stage.durationSeconds,
        },
      ]);
      elapsed += stage.durationSeconds;
      i++;
    }, 350);

    return () => clearInterval(interval);
  }, [stages, startedAt]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [visible]);

  return (
    <div className="log-stream" ref={containerRef}>
      {visible.map((line, idx) => (
        <div key={idx} className={`log-line ${line.conclusion}`}>
          <span className="log-time">[{line.time}]</span>
          <span className="log-icon">{line.conclusion === 'success' ? '✓' : '✗'}</span>
          <span className="log-name">{line.name}</span>
          <span className="log-duration">{line.duration}s</span>
        </div>
      ))}
      {visible.length < stages.length && (
        <div className="log-line running">
          <span className="log-time">[........]</span>
          <span className="log-icon">⟳</span>
          <span className="log-name">processing…</span>
          <span className="log-duration">·</span>
        </div>
      )}
    </div>
  );
}