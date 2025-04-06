import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import profileImg from './assets/profile.jpg';
import './App.css';

function App() {
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
  src="/profile.jpg"
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
          {/* Project 1 */}
          <div className="bg-gray-700 rounded-xl p-4 shadow-xl hover:shadow-purple-500/30 transition duration-300">
            <h3 className="text-xl font-bold text-purple-300">Coming Soon: AI Chatbot</h3>
            <p className="text-gray-300 mt-2">An interactive AI assistant built using OpenAI's GPT API.</p>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-700 rounded-xl p-4 shadow-xl hover:shadow-purple-500/30 transition duration-300">
            <h3 className="text-xl font-bold text-purple-300">Coming Soon: Image Classifier</h3>
            <p className="text-gray-300 mt-2">A computer vision model trained on image datasets using TensorFlow.</p>
          </div>
        </div>
      </section>

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
          href="https://linkedin.com/in/zayedbinjad"
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