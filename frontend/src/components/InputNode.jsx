import { Handle, Position } from "@xyflow/react";
import React from "react";

export default function InputNode() {
  return (
    <div className="input-node-wrapper">
      <div className="input-node-label">
        <span className="input-node-dot" />
        Prompt Input
      </div>

      <textarea
        className="input-node-textarea"
        placeholder="Ask me anything.."
        rows={4}
      />

      <Handle
        type="source"
        position={Position.Right}
        className="input-node-handle"
      />
    </div>
  );
}
