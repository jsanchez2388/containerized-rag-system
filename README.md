# C.R.A.I.G. – Contextual Retrieval and Artificial Intelligence Generation

**C.R.A.I.G.** is a minimalist, modern web application that enables users to interact with an intelligent chatbot using a clean, conversation-based interface. Built with React, the app supports user authentication, live messaging, and a persistent conversation display. The architecture emphasizes modularity, reusability, and simplicity.

> ⚠️ **Note:** This is an **ongoing project**. Features are still being developed and refined. A backend component with LLM integration and persistent storage is planned.

---

## 🚀 Features

- 🔐 **User Authentication** — Login and signup forms with validation  
- 💬 **Real-Time Chat Interface** — Persistent conversation window with dynamic updates  
- 🧠 **LLM Integration (Planned)** — Placeholder for integration with a large language model backend  
- ♻️ **Reusable Components** — Modular design with reusable `Button` and `UserInput` components  
- 🎨 **Clean UI** — Component-specific styling with a mobile-friendly layout  

---

## 🧱 Project Structure

```
/src
  /components
    Banner.jsx
    Button.jsx
    ConversationDisplay.jsx
    UserInput.jsx
  /pages
    Home.jsx
    Login.jsx
    Signup.jsx
  /styles
    global.css
    Home.css
    Login.css
    Signup.css
  App.js
  index.js

/backend (FastAPI planned)
  /routes
  /models
  /utils
  /db
  /data
```

---

## 📦 Installation

### Frontend Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/jsanchez2388/containerized-rag-system.git
   cd frontend
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

---

### 🔧 Backend (Planned)

The backend portion will be added soon and will include:

- API routes for authentication and conversation handling
- Integration with an LLM service (e.g. OpenAI, Vertex AI)
- Persistent storage (MongoDB, PostgreSQL, etc.)

Backend dependencies and setup instructions will be provided in a separate `backend/README.md` once implemented.

---

## 🛠️ Tech Stack

- **Frontend**: React (with Hooks)  
- **Styling**: Component-specific CSS  
- **Routing**: React Router v6  
- **State Management**: React Hooks (`useState`, `useEffect`)  
- **Backend (Planned)**: Node.js, Express, MongoDB/PostgreSQL, LLM API

---

## 📌 Future Enhancements

- Integrate real backend with LLM API  
- Save and retrieve conversation history per user  
- Add protected routes for authenticated sessions  
- Improve accessibility and responsiveness  

---

## 👥 Contributors

- **You** — Developer and designer of the C.R.A.I.G. interface  
- _(Add collaborators here if you open-source it)_

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
