import React from 'react';
import BlogLayout from '../components/BlogLayout';
import blogPosts from '../data/blogPosts';
import SEO from '../components/SEO';

const Month2 = () => {
  return (
    <>
      {/* ✅ SEO metadata for Month 2 blog */}
      <SEO
        title="🧠 Month 2: Advanced AI Concepts and Projects"
        description="Diving deeper into AI with advanced concepts and hands-on projects."
        url="https://zayedbinjad.dev/blog/month2"
        image="https://zayedbinjad.dev/og/month2.png"
      />
      <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
        <BlogLayout 
          title="🧠 Month 2: Advanced AI Concepts and Projects" 
          posts={blogPosts}
          currentSlug="month2"
        >
          <div className="space-y-6 text-gray-200">
            <p>🚧 Really busy to work on website right now, but great updates coming on 20th June </p>
            {/* <p>Coming soon! Stay tuned for updates on advanced AI topics and projects.</p> */}
            {/* Your blog content here */}
          </div>
        </BlogLayout>
      </div>
    </>
  );
};

export default Month2;
