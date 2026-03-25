import React from "react";
import { Handle, Position } from "@xyflow/react";

export default function ResultNode() {
  return (
    <div className="result-node-wrapper">
      <div className="result-node-label">
        <span className="result-node-dot" />
        AI Response
      </div>

      <Handle type="target" position={Position.Left} className="result-node-handle" />

      <div className="result-node-response-box">
        <p className="result-node-placeholder">Response will appear here...</p>
      </div>

      <button className="result-node-save-btn">Save</button>
    </div>
  );
}