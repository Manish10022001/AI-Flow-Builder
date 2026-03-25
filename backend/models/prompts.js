import mongoose from "mongoose";
const promptSchema = new mongoose.Schema({
  prompt: {
    type: String,
    required: true,
  },
  response: {
    type: String,
    required: true,
  },
});
export default mongoose.model("Prompt", promptSchema);
