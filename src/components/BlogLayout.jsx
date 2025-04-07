import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const BlogLayout = ({ title, date, children, prevSlug, nextSlug }) => {
  return (
    <>
      <Helmet>
        <title>{title} | Zayed's AI Journey</title>
        <meta name="description" content={`${title} - Weekly AI learning updates`} />
      </Helmet>

      <div className="min-h-screen bg-black text-white px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="inline-block mb-6 text-purple-400 hover:underline">
            ← Back to Portfolio
          </Link>

          <h1 className="text-4xl font-bold text-purple-300 mb-2">{title}</h1>
          {date && <p className="text-sm text-gray-400 mb-8">{date}</p>}

          <div className="prose prose-invert prose-lg max-w-none">{children}</div>

          <div className="flex justify-between mt-12 border-t border-gray-800 pt-6 text-sm">
            {prevSlug ? (
              <Link to={`/blog/${prevSlug}`} className="text-purple-400 hover:underline">
                ← Previous
              </Link>
            ) : <span />}
            
            {nextSlug && (
              <Link to={`/blog/${nextSlug}`} className="text-purple-400 hover:underline">
                Next →
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogLayout;