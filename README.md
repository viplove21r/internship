# SkillPath AI

## Overview
SkillPath AI is an AI-driven personalized learning web application built during the 6-week Lenovo LEAP Internship in partnership with AICTE[cite: 1]. Aligned with UN Sustainable Development Goal 4 (Quality Education), the platform aims to make quality learning accessible by providing customized study pathways and instant technical guidance[cite: 1].

## Key Features
* **AI Roadmap Generator**: Takes user parameters like learning goals, current skill levels, and available weekly hours to generate structured, week-by-week study plans using Groq AI[cite: 1].
* **AI Doubt Assistant**: An interactive chat interface powered by Groq's fast LLM inference to answer coding questions, explain technical concepts, and assist with debugging[cite: 1].
* **User Dashboard**: Allows learners to track their learning progress, mark completed milestones, and save custom roadmaps to their accounts[cite: 1].
* **Authentication System**: Secure user sign-up and login workflows implemented with JSON Web Tokens (JWT) and encrypted passwords[cite: 1].

## How I Built It
1. **Frontend Development**: Created a responsive UI using React.js and Vite[cite: 1]. Configured client-side routing using React Router, added dark mode support, and built custom hooks/Context API for authentication and state management[cite: 1].
2. **Backend Development**: Built a REST API using Node.js and Express.js[cite: 1]. Implemented controller functions for routes, custom middleware for JWT authorization, and input validation[cite: 1].
3. **AI & Database Integration**: Configured MongoDB Atlas with Mongoose schemas to store user data and roadmap records[cite: 1]. Connected the Groq AI API and used system prompt engineering to generate structured responses[cite: 1].
4. **Integration & Deployment**: Connected the React frontend with the Express backend using Axios[cite: 1]. Deployed the frontend to Vercel, the backend to Render, and configured CORS policies for secure cloud communication[cite: 1].
