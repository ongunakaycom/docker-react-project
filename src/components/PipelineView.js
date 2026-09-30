import React from 'react';

export default function PipelineView({ stages }) {
  return (
    <div className="pipeline-view">
      {stages.map((stage, idx) => (
        <React.Fragment key={idx}>
          <div className={`pipeline-node ${stage.conclusion}`}>
            <span className="node-icon">
              {stage.conclusion === 'success' ? '✓' : stage.conclusion === 'failure' ? '✗' : '⟳'}
            </span>
            <span className="node-name">{stage.name}</span>
          </div>
          {idx < stages.length - 1 && <span className="pipeline-arrow">→</span>}
        </React.Fragment>
      ))}
    </div>
  );
}