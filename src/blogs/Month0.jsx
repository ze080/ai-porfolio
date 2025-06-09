import React from 'react';
import BlogLayout from '../components/BlogLayout';
import blogPosts from '../data/blogPosts';
import SEO from '../components/SEO';

const Month0 = () => {
  return (
    <>
      <SEO
        title="🚀 Month 0: Starting My AI Journey"
        description="Setting up my portfolio and preparing to dive into AI engineering step by step."
        url="https://zayedbinjad.dev/blog/month0"
        image="https://zayedbinjad.dev/og-images/month0.png"
      />

      <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
        <BlogLayout
          title="🚀 Month 0: Starting My AI Journey"
          posts={blogPosts}
          currentSlug="month0"
        >
          <div className="space-y-6 text-gray-200">
            <p>Hello world! 👋</p>

            <p>
              This is the first blog on my new portfolio site. I’m{' '}
              <span className="text-purple-400 font-semibold">Zayed Binjad</span>, starting my journey into AI engineering — step by step, month by month.
            </p>

            <div className="bg-gray-800 border border-purple-500 rounded-xl p-4 shadow-lg">
              <p className="font-semibold text-purple-300">What I did this month:</p>
              <p>✔️ Built and deployed a simple portfolio site using React + Tailwind CSS</p>
              <p>✔️ Connected custom domains (.dev, .com, .in)</p>
              <p>✔️ Set up basic blog and timeline structure</p>
              <p>✔️ Took the first step with curiosity and persistence</p>
            </div>

            <h2 className="text-2xl text-purple-300 font-bold mt-8">🧠 Next Up: Month 1 Learning Plan</h2>
            <p>Here’s my focus for the upcoming month. Feel free to follow along!</p>

            <ul className="list-disc list-inside pl-2 space-y-1">
              <li>📘 Master Python basics — variables, loops, functions, and OOP</li>
            </ul>

            <div className="bg-purple-950/30 border-l-4 border-purple-500 p-4 rounded-lg text-sm italic text-purple-200">
              “Every big journey begins with a single, steady step. This is mine.”
            </div>

            <h2 className="text-2xl text-purple-300 font-bold mt-8">🔥 Why I’m Doing This</h2>
            <p>
              AI is transforming the world, and I want to build the skills to be part of that change.
            </p>
            <p>
              This blog will be my honest record — learning, struggles, and wins. If you’re curious about AI, maybe we can grow together.
            </p>

            <div className="bg-gray-900 border border-purple-600 rounded-xl p-4 mt-8 text-center">
              <p className="text-purple-300 font-semibold text-lg">🗓️ See You Next Month @ 9 PM!</p>
              <p>I’ll post updates on progress, challenges, and lessons learned.</p>
            </div>

            <p className="mt-6">
              Thanks for stopping by! If you find this useful, please share it with anyone interested in AI.
            </p>
            <p className="text-right mt-10 italic text-purple-400">— Zayed 💜</p>
          </div>
        </BlogLayout>
      </div>
    </>
  );
};

export default Month0;
