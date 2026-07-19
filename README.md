# resume-api
Backend API for the AI Resume Builder project — developed as part of a Full-Stack Internship (Module 4, Day 13).

---

📌 Overview

This project is a simple backend system that allows users to manage resume data and simulate AI-generated responses.

- No database is used (data stored in "data.json")
- Data loads into memory when the server starts
- Every update writes back to the file
- Authentication and AI features are currently mocked

---

🛠️ Tech Stack

- Node.js
- Express.js
- File System (fs module)
- JSON (for data storage)

---

📂 Project Structure

```
AI-Resume-Builder-API/
│
├── data/
│   └── data.json        # Stores resume data
│
├── routes/
│   ├── auth.js          # Mock authentication routes
│   ├── resume.js        # Resume CRUD operations
│   └── ai.js            # Mock AI responses
│
├── controllers/
│   └── resumeController.js
│
├── app.js               # Main server file
├── package.json
└── README.md
```
---

▶️ How to Run

# Install dependencies
npm install

# Start the server
npm start

Server will run on:

http://localhost:3000

---

🔗 API Endpoints

🔐 Auth Routes (Mock)

- "POST /api/auth/register"
- "POST /api/auth/login"

---

📄 Resume Routes

- "GET /api/resume" → Get all resumes
- "GET /api/resume/:id" → Get resume by ID
- "POST /api/resume" → Create new resume
- "PUT /api/resume/:id" → Update resume
- "DELETE /api/resume/:id" → Delete resume

---

🤖 AI Routes (Mock)

- "POST /api/ai/generate-summary"
- "POST /api/ai/improve-resume"

---

⚠️ Notes

- This project is for learning/demo purposes
- No real authentication implemented
- AI responses are mocked (no real AI integration yet)
- Data will reset if "data.json" is modified manually

---

🚧 Future Improvements

- Add MongoDB or MySQL database
- Implement real authentication (JWT)
- Integrate real AI APIs (OpenAI)
- Add validation and error handling
- Deploy on cloud (Render / Vercel / Railway)

---

👨‍💻 Author

Latesh Padaliya

🎓 B.Tech Computer Science Engineering Student

🌱 Aspiring Full Stack Developer

GitHub: https://github.com/LateshDev

LinkedIn: https://www.linkedin.com/in/latesh-padaliya


⭐ Support

If you like this project:

- Star the repository ⭐
- Share with others 🚀

---
