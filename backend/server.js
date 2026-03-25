import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Prompt from "./models/prompts.js";
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

app.get("/test-prompt", async (req, res) => {
  try {
    // Create a new Prompt document
    const newPrompt = await Prompt.create({
      prompt: "Hello, AI!",
      response: "Hi there! How can I help?",
    });

    // Fetch it back to confirm
    const found = await Prompt.findById(newPrompt._id);

    res.json({
      message: "Prompt model works!",
      createdPrompt: found,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
