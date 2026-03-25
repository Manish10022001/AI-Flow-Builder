import { Handle, Position } from "@xyflow/react";
import React from "react";

export default function InputNode() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.label}>
        <span style={styles.dot} />
        Prompt Input
      </div>

      <textarea
        style={styles.textarea}
        placeholder="Ask me anything.."
        rows={4}
      />

      <Handle type="source" position={Position.Right} style={styles.handle} />
    </div>
  );
}

const styles = {
  wrapper: {
    background: "#16161a",
    border: "1px solid #2a2a35",
    borderRadius: "14px",
    padding: "16px",
    width: "300px",
    boxShadow: "0 0 30px rgba(124,106,255,0.1)",
  },
  label: {
    fontFamily: "monospace",
    fontSize: "11px",
    color: "#7c6aff",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  dot: {
    display: "inline-block",
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#7c6aff",
  },
  textarea: {
    width: "100%",
    background: "#0d0d0f",
    border: "1px solid #2a2a35",
    borderRadius: "8px",
    color: "#e8e8f0",
    fontFamily: "sans-serif",
    fontSize: "14px",
    padding: "10px 12px",
    resize: "vertical",
    outline: "none",
    lineHeight: "1.5",
  },
  handle: {
    width: "12px",
    height: "12px",
    background: "#7c6aff",
    border: "2px solid #0d0d0f",
    right: "-6px",
  },
};
