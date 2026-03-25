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
import { useState, useCallback, useRef } from "react";
import { askAI, saveFlow } from "./api";

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
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const promptRef = useRef("");
  const responseRef = useRef("");
  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSave = async () => {
    try {
      await saveFlow(promptRef.current, responseRef.current);
      setSaved(true);
      setNodes((prev) =>
        prev.map((n) =>
          n.id === "2" ? { ...n, data: { ...n.data, saved } } : n
        )
      );
      showToast("Saved");
    } catch {
      showToast("Failed to save.", "error");
    }
  };

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
        onSave: handleSave,
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

  const handleRunFlow = async () => {
    if (!prompt.trim()) {
      return showToast("Please enter a prompt first.", "error");
    }
    promptRef.current = prompt;
    setLoading(true);

    setSaved(false);
    setNodes(buildNodes(prompt, "", true, false));

    setEdges((prev) =>
      prev.map((e) => (e.id === "e1-2" ? { ...e, animated: true } : e))
    );

    try {
      const { data } = await askAI(prompt);
      responseRef.current = data.response;
      setLoading(false);
      setNodes(buildNodes(prompt, data.response, false, false));
      setEdges((prev) =>
        prev.map((e) => (e.id === "e1-2" ? { ...e, animated: false } : e))
      );
    } catch (err) {
      const msg = err.response?.data?.error || "Something went wrong.";
      setLoading(false);
      setNodes(buildNodes(prompt, "Error: " + msg, false, false));
      setEdges((prev) =>
        prev.map((e) => (e.id === "e1-2" ? { ...e, animated: false } : e))
      );
      showToast(msg, "error");
    }
  };
  return (
    <div className="AppWrapper">
      <header className="AppHeader">
        <div className="Header-Left">
          <span className="Logo">⬡ AI Flow Builder</span>
        </div>

        <button
          className={`RunBtn ${loading ? "Disabled" : ""}`}
          onClick={handleRunFlow}
          disabled={loading}
        >
          {loading ? "Running…" : "▶ Run Flow"}
        </button>
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

      {toast && (
        <div
          className={`Toast ${toast.type === "error" ? "Error" : "Success"}`}
        >
          {toast.msg}
        </div>
      )}
    </div>
  );
}
