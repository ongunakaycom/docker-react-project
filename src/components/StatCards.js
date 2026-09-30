import React from 'react';

export default function StatCards({ stats, image }) {
  return (
    <div className="stat-grid">
      <div className="stat-card">
        <span className="stat-label">TOTAL RUNS</span>
        <span className="stat-value">{stats.totalRuns}</span>
        <span className="stat-sub">{stats.successRuns} successful</span>
      </div>
      <div className="stat-card">
        <span className="stat-label">SUCCESS RATE</span>
        <span className="stat-value">{stats.successRate}<span className="unit">%</span></span>
        <span className="stat-sub">{stats.failedRuns} failed</span>
      </div>
      <div className="stat-card">
        <span className="stat-label">AVG BUILD TIME</span>
        <span className="stat-value">{formatDuration(stats.avgDurationSeconds)}</span>
        <span className="stat-sub">last build</span>
      </div>
      <div className="stat-card">
        <span className="stat-label">IMAGE SIZE</span>
        <span className="stat-value">{image.sizeMB}<span className="unit">MB</span></span>
        <span className="stat-sub">{image.tag}</span>
      </div>
    </div>
  );
}

function formatDuration(s) {
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}m ${sec.toString().padStart(2, '0')}s`;
}