// Week1.jsx

import React from 'react';
import BlogLayout from '../components/BlogLayout';
import blogPosts from '../data/blogPosts';
import SEO from '../components/SEO';
const Week1 = () => {


  return (
    <>
    {/* ✅ SEO metadata for Week 0 blog */}
    <SEO
        title="🧠 Week 1: Foundations of AI - Python, Math & Mindset"
        description="Covered Python fundamentals, linear algebra, and the mindset required to become a top-tier AI engineer."
        url="https://zayedbinjad.dev/blog/week1"
        image="https://zayedbinjad.dev/og/week1.png"
      />
<div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
    <BlogLayout 
      title="🧠 Week 1: Foundations of AI - Python, Math & Mindset" 
      posts={blogPosts}
      currentSlug="week1"
    >
      <div className="space-y-6 text-gray-200">
        <p>Coming on 13th April i.e. Sunday @ 9PM so stay tuned !! </p>
        {/* Your blog content here */}
      </div>
    </BlogLayout>
    </div>
    </>
  );
};

export default Week1; // Export the component