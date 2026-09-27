# SkillPath AI

## Overview
SkillPath AI is an AI-driven personalized learning web application built during the 6-week Lenovo LEAP Internship in partnership with AICTE. Aligned with UN Sustainable Development Goal 4 (Quality Education), the platform aims to make quality learning accessible by providing customized study pathways and instant technical guidance.

## Key Features
* **AI Roadmap Generator**: Takes user parameters like learning goals, current skill levels, and available weekly hours to generate structured, week-by-week study plans using Groq AI.
* **AI Doubt Assistant**: An interactive chat interface powered by Groq's fast LLM inference to answer coding questions, explain technical concepts, and assist with debugging.
* **User Dashboard**: Allows learners to track their learning progress, mark completed milestones, and save custom roadmaps to their accounts.
* **Authentication System**: Secure user sign-up and login workflows implemented with JSON Web Tokens (JWT) and encrypted passwords.

## How I Built It
1. **Frontend Development**: Created a responsive UI using React.js and Vite. Configured client-side routing using React Router, added dark mode support, and built custom hooks/Context API for authentication and state management.
2. **Backend Development**: Built a REST API using Node.js and Express.js. Implemented controller functions for routes, custom middleware for JWT authorization, and input validation.
3. **AI & Database Integration**: Configured MongoDB Atlas with Mongoose schemas to store user data and roadmap records. Connected the Groq AI API and used system prompt engineering to generate structured responses.
4. **Integration & Deployment**: Connected the React frontend with the Express backend using Axios. Deployed the frontend to Vercel, the backend to Render, and configured CORS policies for secure cloud communication.
