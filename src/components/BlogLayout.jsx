import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const BlogLayout = ({ title, children }) => {
  return (
    <>
      <Helmet>
        <title>{title} | Zayed's AI Journey</title>
        <meta name="description" content={`${title} - Weekly AI learning updates`} />
      </Helmet>
      
      <div className="max-w-3xl mx-auto px-4 py-12 text-white">
        <Link to="/" className="inline-block mb-6 text-purple-400 hover:underline">
          ← Back to Portfolio
        </Link>
        {children}
        
        <div className="flex justify-between mt-12 border-t border-gray-700 pt-6">
          <Link 
            to="/blog/week0" 
            className="text-purple-400 hover:underline"
          >
            Next Post →
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogLayout;