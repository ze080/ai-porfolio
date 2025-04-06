import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './App.css';


function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-5xl font-bold text-purple-400 mb-4">Zayed Binjad</h1>
      <p className="text-xl text-gray-300 mb-8">Aspiring AI Engineer | Passionate about ML, Neural Networks & Innovation 🤖</p>
      
      <section className="w-full max-w-4xl bg-gray-800 rounded-2xl p-6 shadow-lg mt-6">
  <h2 className="text-3xl font-semibold text-white mb-6">🧠 Featured Projects</h2>
  
  <div className="grid gap-6 md:grid-cols-2">
    {/* Project Card Placeholder */}
    <div className="bg-gray-700 rounded-xl p-4">
      <h3 className="text-xl font-bold text-purple-300">Coming Soon: AI Chatbot</h3>
      <p className="text-gray-300 mt-2">An interactive AI assistant built using OpenAI's GPT API.</p>
    </div>

    <div className="bg-gray-700 rounded-xl p-4">
      <h3 className="text-xl font-bold text-purple-300">Coming Soon: Image Classifier</h3>
      <p className="text-gray-300 mt-2">A computer vision model trained on image datasets using TensorFlow.</p>
    </div>
  </div>
</section>
<div className="flex gap-6 mt-10 text-2xl">
  <a href="https://github.com/ze080" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition">
    <FaGithub />
  </a>
  <a href="https://linkedin.com/in/zayedbinjad" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition">
    <FaLinkedin />
  </a>
  <a href="zayedbinjad@gmai.come" className="text-white hover:text-purple-400 transition">
    <FaEnvelope />
  </a>
</div>



      <footer className="mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} Zayed Binjad. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
