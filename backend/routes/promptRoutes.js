import express, { response } from "express";
import fetch from "node-fetch";
import Prompt from "../models/Prompt.js";

const router = express.Router();

// POST endpoint ( /api/ask-ai)
router.post("/ask-ai", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt || prompt.trim() === "") {
    return res.status(400).json({ error: "Prompt is required." });
  }

  try {
    const openRouterRes = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000",
          "X-Title": "AI Builder Flow",
        },
        body: JSON.stringify({
          model: "openrouter/free",//used free model router so it picsk one of free model for me
          messages: [{ role: "user", content: prompt }],
        }),
      }
    );

    const data = await openRouterRes.json();

    if (!openRouterRes.ok) {
      return res
        .status(500)
        .json({ error: data.error?.message || "OpenRouter error." });
    }

    const aiResponse = data.choices?.[0]?.message?.content || "No response.";
    return res.json({ response: aiResponse });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal Server Error." });
  }
});

export default router;
