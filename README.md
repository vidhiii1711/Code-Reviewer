Code Review Assistant 🤖
A web-based AI-powered tool that reviews and analyzes your code in real-time using Google's Gemini AI. Paste your code, click review, and get instant feedback on improvements, bugs, and best practices.
🌐 Live Demo
code-reviewer-rust.vercel.app

✨ Features

Instant AI Code Review — Paste any code and get detailed feedback in seconds
Syntax Highlighting — Code editor with Prism.js dark theme highlighting
Markdown Rendered Feedback — AI responses rendered with proper formatting, headings, and code blocks
Loading States — Spinner and status messages while analysis runs
Error Handling — Graceful fallback messages if the API is unreachable
Clean Split Layout — Code editor on the left, review output on the right


🛠️ Tech Stack
Frontend
ToolPurposeReact + ViteUI frameworkreact-simple-code-editorIn-browser code editorPrismJSSyntax highlightingreact-markdownRenders AI feedback as formatted markdownAxiosHTTP requests to backendCSSCustom styling and animations
Backend
ToolPurposeNode.js / ExpressREST API serverGoogle Gemini AICode analysis and review generationRenderBackend deployment

📁 Project Structure
Code-Reviewer/
├── Frontend/
│   ├── src/
│   │   ├── App.jsx        # Main React component
│   │   ├── App.css        # Styling and animations
│   │   └── main.jsx       # React entry point
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── Backend/
│   ├── server.js          # Express server + Gemini API integration
│   └── package.json
├── App.jsx                # Root component
├── App.css                # Root styles
└── README.md

🚀 Getting Started
Prerequisites

Node.js v18+
A Google Gemini API key — get one at aistudio.google.com

1. Clone the repository
bashgit clone https://github.com/vidhiii1711/Code-Reviewer.git
cd Code-Reviewer
2. Setup Backend
bashcd Backend
npm install
Create a .env file in the Backend folder:
envGEMINI_API_KEY=your_gemini_api_key_here
PORT=3000
Start the backend:
bashnode server.js
3. Setup Frontend
bashcd Frontend
npm install
npm run dev
Open http://localhost:5173 in your browser.

🔧 How It Works
User pastes code
      ↓
Frontend (React) sends POST request to backend
      ↓
Backend sends code to Google Gemini AI
      ↓
Gemini returns review in markdown format
      ↓
Frontend renders markdown as formatted feedback

User types or pastes code into the editor on the left panel
User clicks the REVIEW button
Frontend sends the code to the Express backend via Axios POST request
Backend forwards the code to Gemini AI with a code review prompt
Gemini returns a detailed review covering bugs, improvements, and best practices
Frontend renders the markdown response on the right panel


🌍 Deployment
Frontend — Vercel
bashcd Frontend
npm run build
# Deploy the dist/ folder to Vercel
Backend — Render

Connect the Backend folder to a new Render Web Service
Add GEMINI_API_KEY as an environment variable in Render dashboard
Set start command to node server.js

Live backend URL: https://code-reviewer-e3yq.onrender.com

📸 Usage

Go to code-reviewer-rust.vercel.app
Paste your code in the left panel
Click REVIEW
Read the AI feedback on the right panel


🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Fork the repository
Create your feature branch (git checkout -b feature/your-feature)
Commit your changes (git commit -m 'Add your feature')
Push to the branch (git push origin feature/your-feature)
Open a Pull Request


📄 License
This project is open source and available under the MIT License.

👩‍💻 Author
Vidhi — github.com/vidhiii1711
