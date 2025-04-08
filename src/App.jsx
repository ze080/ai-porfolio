import { Routes, Route, Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import BlogPost from './pages/Blog';
import Checklist from './pages/Checklist';
import profileImg from '/profile.jpg';
import './App.css';

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<PortfolioHome />} />
        <Route path="/blog" element={<BlogPost />} />
        <Route path="/checklist" element={<Checklist />} />
      </Routes>
    
  );
}

// Your existing home page as a separate component
function PortfolioHome() {
  return (
    <div className="min-h-screen h-full bg-gradient-to-br from-gray-900 via-purple-900 to-black bg-[length:200%_200%] animate-[gradientShift_10s_ease_infinite] text-white flex flex-col items-center justify-center px-4 py-10">
      
      {/* 👤 Profile Section */}
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center text-center mb-12"
      >
        <img
          src={profileImg}
          alt="Zayed Binjad"
          onError={(e) => (e.target.style.display = 'none')}
          className="w-40 h-40 rounded-full border-4 border-purple-500 shadow-xl mb-4 object-cover ring-glow"
        />

        <h1 className="text-5xl font-bold text-purple-400">Zayed Binjad</h1>
        <p className="text-xl text-gray-300 mt-2">
          Aspiring AI Engineer | Passionate about ML, Neural Networks & Innovation 🤖
        </p>
      </motion.section>

      {/* 🧠 Projects Section */}
      <section className="w-full max-w-4xl bg-gray-800 rounded-2xl p-6 shadow-lg mt-6">
        <h2 className="text-3xl font-semibold text-white mb-6">🧠 Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-gray-700 rounded-xl p-4 shadow-xl hover:shadow-purple-500/30 transition duration-300">
            <h3 className="text-xl font-bold text-purple-300">Coming Soon: AI Chatbot</h3>
            <p className="text-gray-300 mt-2">An interactive AI assistant built using OpenAI's GPT API.</p>
          </div>
          <div className="bg-gray-700 rounded-xl p-4 shadow-xl hover:shadow-purple-500/30 transition duration-300">
            <h3 className="text-xl font-bold text-purple-300">Coming Soon: Image Classifier</h3>
            <p className="text-gray-300 mt-2">A computer vision model trained on image datasets using TensorFlow.</p>
          </div>
        </div>
      </section>

      {/* 📝 Blog Section - Updated for Router */}
      <section className="w-full max-w-4xl bg-gray-800 rounded-2xl p-6 shadow-lg mt-10">
  <h2 className="text-3xl font-semibold text-white mb-6">📝 Latest Blog</h2>
  <div className="space-y-4">
    <Link to="/blog">
      <div className="bg-gray-700 rounded-xl p-4 shadow-md hover:shadow-purple-400/30 transition hover:scale-105">
        <h3 className="text-xl font-bold text-purple-300">🧠 Week 1: Foundations of AI - Python, Math & Mindset</h3>
        <p className="text-gray-300 mt-2">Join me as I build my AI future from scratch. Weekly blogs every Sunday 9 PM!</p>
      </div>
    </Link>
  </div>
</section>

      {/* 🕒 Learning Timeline Section */}
      <section className="w-full max-w-4xl bg-gray-800 rounded-2xl p-6 shadow-lg mt-10">
        <h2 className="text-3xl font-semibold text-white mb-6">📆 Learning Timeline</h2>
        <ul className="space-y-4 border-l-2 border-purple-500 pl-4">
          <li className="relative group transition-transform hover:scale-[1.01] hover:shadow-lg hover:bg-gray-700 p-4 rounded-md">
            <span className="absolute left-[-12px] top-4 w-4 h-4 bg-purple-500 rounded-full border-2 border-white group-hover:scale-110 transition-transform"></span>
            <h4 className="text-lg font-semibold text-purple-300">April 2025</h4>
            <p className="text-gray-300 text-sm mt-1">Started building my AI portfolio and exploring Python and Maths.</p>
          </li>
          <li className="relative group p-4 mt-6 bg-purple-900/30 border border-purple-600 rounded-xl text-purple-200 italic">
            🚀 More coming soon... Stay tuned!
          </li>
        </ul>
      </section>

      <Link to="/checklist" className="mt-10 text-purple-300 underline hover:text-purple-100 transition">
        View AI Engineer Checklist
      </Link>

      {/* 🔗 Social Icons */}
      <div className="flex gap-6 mt-10 text-3xl">
        <a
          href="https://github.com/ze080"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white hover:scale-125 transition-transform duration-300 ease-in-out"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/zayed-binjad-4b63a0247/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-400 hover:scale-125 transition-transform duration-300 ease-in-out"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:zayedbinjad@gmail.com"
          className="text-gray-300 hover:text-pink-400 hover:scale-125 transition-transform duration-300 ease-in-out"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* 📄 Footer */}
      <footer className="mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} Zayed Binjad. All rights reserved.
      </footer>
    </div>
  );
}

export default App;