import React from 'react';

export default function RecentRuns({ runs }) {
  return (
    <div className="recent-runs">
      {runs.map((run) => (
        <div key={run.number} className={`run-row ${run.conclusion}`}>
          <span className={`run-badge ${run.conclusion}`}>
            {run.conclusion === 'success' ? '✓' : '✗'}
          </span>
          <span className="run-number">#{run.number}</span>
          <span className="run-sha">{run.shortSha}</span>
          <span className="run-msg">{run.message}</span>
          <span className="run-duration">{run.durationSeconds}s</span>
        </div>
      ))}
    </div>
  );
}