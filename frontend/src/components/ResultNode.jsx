import React from "react";
import { Handle, Position } from "@xyflow/react";

export default function ResultNode({ data }) {
  return (
    <div className={`result-node-wrapper ${data.loading ? "loading" : ""}`}>
      <div className="result-node-label">
        <span className="result-node-dot" />
        AI Response
      </div>

      <Handle
        type="target"
        position={Position.Left}
        className="result-node-handle"
      />

      <div className="result-node-response-box">
        {data.loading ? (
          <p className="result-node-placeholder">Thinking…</p>
        ) : data.value ? (
          <p className="result-node-text">{data.value}</p>
        ) : (
          <p className="result-node-placeholder">Response will appear here…</p>
        )}
      </div>

      {data.value && !data.loading && (
        <button
          className={`result-node-save-btn ${data.saved ? "saved" : ""}`}
          onClick={data.onSave}
          disabled={data.saved}
        >
          {data.saved
            ? "✓ Saved prompt and response"
            : "Save prompt and response"}
        </button>
      )}
    </div>
  );
}
