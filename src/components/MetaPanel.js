import React from 'react';

export default function MetaPanel({ data }) {
  return (
    <div className="meta-panel-body">
      <div className="meta-row">
        <span className="meta-key">Repository</span>
        <span className="meta-val">{data.repository}</span>
      </div>
      <div className="meta-row">
        <span className="meta-key">Branch</span>
        <span className="meta-val">{data.branch}</span>
      </div>
      <div className="meta-row">
        <span className="meta-key">Commit</span>
        <span className="meta-val accent-2">{data.lastCommit.shortSha}</span>
      </div>
      <div className="meta-row">
        <span className="meta-key">Message</span>
        <span className="meta-val">{data.lastCommit.message}</span>
      </div>
      <div className="meta-row">
        <span className="meta-key">Author</span>
        <span className="meta-val">{data.lastCommit.author}</span>
      </div>
      <div className="meta-row">
        <span className="meta-key">Image</span>
        <span className="meta-val">{data.image.name}:{data.image.tag}</span>
      </div>
      <div className="meta-row">
        <span className="meta-key">Image size</span>
        <span className="meta-val accent">{data.image.sizeMB} MB</span>
      </div>
      <div className="meta-row">
        <span className="meta-key">Digest</span>
        <span className="meta-val mono-sm">{data.image.digest.slice(0, 24)}…</span>
      </div>
      <div className="meta-row">
        <span className="meta-key">Vercel</span>
        <span className="meta-val">
          <a href={data.deployment.url} target="_blank" rel="noreferrer">
            {data.deployment.status} ↗
          </a>
        </span>
      </div>
      <div className="meta-row">
        <span className="meta-key">Trivy</span>
        <span className="meta-val">
          <span className="badge-ok">{data.security.trivy.critical} critical</span>
          <span className="badge-warn">{data.security.trivy.high} high</span>
        </span>
      </div>
    </div>
  );
}