import "./App.css";
import {
  Background,
  BackgroundVariant,
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import InputNode from "./components/InputNode";
import ResultNode from "./components/ResultNode";
import { useState, useCallback } from "react";

const nodeTypes = {
  inputNode: InputNode,
  resultNode: ResultNode,
};
// const nodes = [
//   {
//     id: "1",
//     type: "inputNode",
//     position: { x: 80, y: 180 },
//     data: {},
//   },
//   {
//     id: "2",
//     type: "resultNode",
//     position: { x: 520, y: 150 },
//     data: {},
//   },
// ];

const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: "smoothstep",
    animated: false,
  },
];

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [saved, setSaved] = useState(false);
  const buildNodes = (curPrompt, curResp, curLoading, curSaved) => [
    {
      id: "1",
      type: "inputNode",
      position: { x: 80, y: 180 },
      data: {
        value: curPrompt,
        onChange: (val) => {
          setPrompt(val);
          setSaved(false);
          setNodes(buildNodes(val, curResp, curLoading, false));
        },
      },
    },
    {
      id: "2",
      type: "resultNode",
      position: { x: 520, y: 150 },
      data: {
        value: curResp,
        loading: curLoading,
        saved: curSaved,
      },
    },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(
    buildNodes("", "", false, false)
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="AppWrapper">
      <header className="AppHeader">
        <div className="Header-Left">
          <span className="Logo">⬡ AI Flow Builder</span>
        </div>

        <button className="RunBtn">▶ Run Flow</button>
      </header>
      <div className="Canvas">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.3 }}
        >
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
