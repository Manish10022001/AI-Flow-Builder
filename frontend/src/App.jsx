import "./App.css";
import {
  Background,
  BackgroundVariant,
  Position,
  ReactFlow,
} from "@xyflow/react";
import React from "react";
import InputNode from "./components/InputNode";
import ResultNode from "./components/ResultNode";
const nodeTypes = {
  inputNode: InputNode,
  resultNode: ResultNode,
};
const nodes = [
  {
    id: "1",
    type: "inputNode",
    position: { x: 80, y: 180 },
    data: {},
  },
  {
    id: "2",
    type: "resultNode",
    position: { x: 520, y: 150 },
    data: {},
  },
];

const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: "smoothstep",
  },
];

export default function App() {
  return (
    <div className="AppWrappeer">
      <header className="AppHeader">
        <div className="Header-Left">
          <span className="Logo">⬡ AI Flow Builder</span>
        </div>

        <button className="RunBtn">▶ Run Flow</button>
      </header>
      <div className="Canvas">
        <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
          <Background
            variant={BackgroundVariant.Dots}
            gap={24}
            size={1}
            color="#1e1e28"
          />
        </ReactFlow>
      </div>
    </div>
  );
}
