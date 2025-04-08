import React from 'react';
import BlogLayout from '../components/BlogLayout';
import blogPosts from '../data/blogPosts';

const Week0 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      <BlogLayout 
        title="🚀 Week 0: The Beginning of a World-Class AI Journey" 
        posts={blogPosts}
        currentSlug="week0"
      >
        <div className="space-y-6 text-gray-200">

          <p>Hey there, world! 👋</p>

          <p>
            Welcome to the <strong>first official blog</strong> on my brand-new portfolio site. I’m <span className="text-purple-400 font-semibold">Zayed Binjad</span> — an aspiring AI Engineer with a mission to go from zero to world-class, one week at a time. 🧠⚡
          </p>

          <div className="bg-gray-800 border border-purple-500 rounded-xl p-4 shadow-lg">
            <p className="font-semibold text-purple-300">This week’s highlight:</p>
            <p>✅ Built and deployed my portfolio using React + Tailwind CSS</p>
            <p>✅ Connected my custom domains (.dev, .com, .in)</p>
            <p>✅ Set up blogs and a learning timeline</p>
            <p>✅ All without a course — just docs, Google, and curiosity</p>
          </div>

          <h2 className="text-2xl text-purple-300 font-bold mt-8">🧠 What’s Next: Week 1 Learning Plan</h2>
          <p>Here’s what I’ll be learning this week. Feel free to join in!</p>

          <ul className="list-disc list-inside pl-2 space-y-1">
            <li>📘 Master Python (variables, loops, functions, OOP)</li>
            <li>📊 Learn NumPy, Pandas, Matplotlib basics</li>
            <li>📐 Linear Algebra (vectors, dot product, matrix operations)</li>
            <li>🔢 Calculus (derivatives, gradients)</li>
            <li>🎲 Probability & Statistics (mean, std dev, distributions)</li>
            <li>🛠️ Build Python Projects: calculator, matrix ops, CSV analyzer</li>
          </ul>

          <div className="bg-purple-950/30 border-l-4 border-purple-500 p-4 rounded-lg text-sm italic text-purple-200">
            “It’s going to be a packed week, but I’m excited — this is the ground zero of something big.”
          </div>

          <h2 className="text-2xl text-purple-300 font-bold mt-8">🔥 Why I’m Doing This</h2>
          <p>
            AI isn’t just the future — it’s the <span className="font-bold text-white">now</span>. And I’m not here to just learn it — I’m here to master it.
          </p>
          <p>
            I’ll be documenting everything: honestly, openly, and consistently. If you’ve ever wanted to learn AI — this might be your sign to start.
          </p>

          <div className="bg-gray-900 border border-purple-600 rounded-xl p-4 mt-8 text-center">
            <p className="text-purple-300 font-semibold text-lg">🗓️ See You Next Sunday @ 9 PM!</p>
            <p>I’ll be posting a new blog every Sunday night with my progress, challenges, and learnings. Hope to see you on the journey!</p>
          </div>

          <p className="text-right mt-10 italic text-purple-400">— Zayed 💜</p>
        </div>
      </BlogLayout>
    </div>
  );
};

export default Week0;
