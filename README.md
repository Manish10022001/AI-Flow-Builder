# AI Flow Builder

A full-stack MERN application where a user types a prompt into a React Flow node, clicks **Run Flow**, and sees the AI response appear in a connected result node.

## Live Demo

Frontend: https://ai-flow-builder-psi.vercel.app
Backend: https://ai-flow-builder-1-tr8i.onrender.com

---

## Tech Stack

| Layer    | Technology                       |
|----------|----------------------------------|
| Frontend | React + Vite, React Flow         |
| Backend  | Node.js, Express.js              |
| Database | MongoDB Atlas                    |
| AI       | OpenRouter API                   |

---

## Features

- Two connected React Flow nodes (Input and Result)
- Run Flow button sends prompt to AI
- Edge animates while waiting for response
- Save prompt and response to MongoDB
- Toast notifications for success and error

---

## Project Structure
```
AI-Flow-Builder/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── Prompt.js
│   ├── routes/
│   │   └── promptRoutes.js
│   ├── .env
│   └── server.js
└── frontend/
    └── src/
        ├── components/
        │   ├── InputNode.jsx
        │   └── ResultNode.jsx
        ├── api.js
        ├── App.jsx
        ├── App.css
        ├── main.jsx
        └── index.css
```

---

## Prerequisites

- Node.js v18+
- MongoDB Atlas account (free tier)
- OpenRouter account and API key (free tier)

---

## Setup and Installation

### 1. Clone the repository
```
git clone https://github.com/Manish10022001/AI-Flow-Builder.git
cd AI-Flow-Builder
```

### 2. Setup Backend
```
cd backend
npm install
```

### 3. Configure backend environment variables

Create a `.env` file inside the `backend/` folder:
```
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
OPENROUTER_API_KEY=your_openrouter_api_key
```

- MONGODB_URI → MongoDB Atlas → Connect → Drivers → copy string
- OPENROUTER_API_KEY → openrouter.ai/keys → create free key

### 4. Run Backend
```
cd backend
npm run dev
```

You should see:
```
🚀 Server running on port 5000
✅ MongoDB connected
```

### 5. Setup Frontend
```
cd frontend
npm install
```

### 6. Configure frontend environment variables

Create a `.env` file inside the `frontend/` folder:
```
VITE_API_URL=http://localhost:5000/api
```

### 7. Run Frontend
```
cd frontend
npm run dev
```

Go to http://localhost:5173

---

## How to Use

1. Type any question into the left node
2. Click Run Flow
3. Wait for AI response to appear in the right node
4. Click Save prompt and response to save to MongoDB

---

## API Endpoints

| Method | Route       | Description                         |
|--------|-------------|-------------------------------------|
| POST   | /api/ask-ai | Send prompt, get AI response        |
| POST   | /api/save   | Save prompt and response to MongoDB |

---

## Deployment

### Backend deployed on Render.com
- Root Directory: backend
- Build Command: npm install
- Start Command: node server.js
- Environment variables added in Render dashboard

### Frontend deployed on Vercel
- Root Directory: frontend
- Framework: Vite
- Environment variable VITE_API_URL set to Render backend URL

---

## License

MIT
