import axios from "axios";

const API = import.meta.env.VITE_API_URL || "https://localhost:5000/api";

//ask ai
export function askAI(prompt) {
  return axios.post(`${API}/ask-ai`, { prompt });
}

//save flow
export function saveFlow(prompt, response) {
  return axios.post(`${API}/save`, { prompt, response });
}
