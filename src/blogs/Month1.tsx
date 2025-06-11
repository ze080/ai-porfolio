import React from 'react';
import BlogLayout from '../components/BlogLayout';
import blogPosts from '../data/blogPosts';
import SEO from '../components/SEO';

const Month1: React.FC = () => {
  return (
    <>
      <SEO
        title="📘 Month 1: Mastering Python Basics"
        description="Diving deep into Python fundamentals: variables, loops, functions, and OOP."
        url="https://zayedbinjad.dev/blog/month1"
        image="https://zayedbinjad.dev/og-images/month1.png"
      />

      <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
        <BlogLayout
          title="📘 Month 1: Mastering Python Basics"
          posts={blogPosts}
          currentSlug="month1"
        >
          <div className="space-y-6 text-gray-200">
            <p>Hey there, world! 👋</p>

            <p>
              Month 1 is all about getting solid with Python fundamentals. This month, I focused on variables, loops, functions, and object-oriented programming.
            </p>

            <div className="bg-gray-800 border border-purple-500 rounded-xl p-4 shadow-lg">
              <p className="font-semibold text-purple-300">Key progress:</p>
              <p>✔️ Understood variable types and scope</p>
              <p>✔️ Practiced loops and control flow with real examples</p>
              <p>✔️ Built functions with parameters and return values</p>
              <p>✔️ Started exploring classes and OOP concepts</p>
            </div>

            <h2 className="text-2xl text-purple-300 font-bold mt-8">🧠 What’s Next: Month 2 Plan</h2>
            <p>Next up, I plan to start working with data structures and basic algorithms to build a strong foundation.</p>

            <div className="bg-purple-950/30 border-l-4 border-purple-500 p-4 rounded-lg text-sm italic text-purple-200">
              “Consistent learning compounds. This month was about building the base — next, we build the structure.”
            </div>

            <h2 className="text-2xl text-purple-300 font-bold mt-8">🔥 Why I’m Doing This</h2>
            <p>
              Solid Python skills are the backbone of AI and machine learning. Mastering the basics is the first crucial step toward mastery.
            </p>

            <div className="bg-gray-900 border border-purple-600 rounded-xl p-4 mt-8 text-center">
              <p className="text-purple-300 font-semibold text-lg">🗓️ See You Next Month @ 9 PM!</p>
              <p>I’ll share new lessons, projects, and insights.</p>
            </div>

            <p className="mt-6">
              Thanks for reading! If you’re learning Python or AI too, I’d love to hear about your progress.
            </p>
            <p className="text-right mt-10 italic text-purple-400">— Zayed 💜</p>
          </div>
        </BlogLayout>
      </div>
    </>
  );
};

export default Month1;
