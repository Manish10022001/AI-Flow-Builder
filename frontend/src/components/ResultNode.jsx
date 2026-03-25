import React from "react";
import { Handle, Position } from "@xyflow/react";
export default function ResultNode() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.label}>
        <span style={styles.dot} />
        AI Response
      </div>

      <Handle type="target" position={Position.Left} style={styles.handle} />

      <div style={styles.responseBox}>
        <p style={styles.placeholder}>Response will appear here...</p>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    background: "#16161a",
    border: "1px solid #2a2a35",
    borderRadius: "14px",
    padding: "16px",
    width: "320px",
    boxShadow: "0 0 30px rgba(62,207,142,0.08)",
    transition: "border-color 0.3s",
  },
  wrapperLoading: {
    borderColor: "#3ecf8e",
    boxShadow: "0 0 30px rgba(62,207,142,0.2)",
  },
  label: {
    fontFamily: "monospace",
    fontSize: "11px",
    color: "#3ecf8e",
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
    background: "#3ecf8e",
  },
  responseBox: {
    background: "#0d0d0f",
    border: "1px solid #2a2a35",
    borderRadius: "8px",
    padding: "12px",
    minHeight: "100px",
    maxHeight: "220px",
    overflowY: "auto",
  },
  text: {
    fontFamily: "sans-serif",
    fontSize: "14px",
    color: "#e8e8f0",
    lineHeight: "1.65",
    whiteSpace: "pre-wrap",
  },
  placeholder: {
    fontFamily: "sans-serif",
    fontSize: "13px",
    color: "#3a3a4a",
    fontStyle: "italic",
  },
  handle: {
    width: "12px",
    height: "12px",
    background: "#3ecf8e",
    border: "2px solid #0d0d0f",
    left: "-6px",
  },
  saveBtn: {
    marginTop: "10px",
    width: "100%",
    padding: "8px",
    background: "transparent",
    border: "1px solid #3ecf8e",
    borderRadius: "8px",
    color: "#3ecf8e",
    fontFamily: "monospace",
    fontSize: "11px",
    cursor: "pointer",
    letterSpacing: "0.05em",
  },
  saveBtnSaved: {
    opacity: 0.6,
    cursor: "default",
    background: "rgba(62,207,142,0.1)",
  },
};
