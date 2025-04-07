import React, { useState } from 'react';
import blogs from '../blogs/blog';
import { Rocket, Calendar, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BlogPage = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleSelect = (blog) => {
    setSelectedBlog(blog);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedBlog(null);
    window.scrollTo(0, 0);
  };

  if (selectedBlog) {
    const { Component, title } = selectedBlog;
    return (
      <div className="px-4 py-6 max-w-4xl mx-auto text-white">
        <button
          onClick={handleBack}
          className="mb-4 flex items-center text-purple-300 hover:text-purple-400 transition"
        >
          <ChevronLeft className="w-5 h-5 mr-1" /> Back to Blogs
        </button>
        <Component />
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 text-white">
      <h1 className="text-4xl font-bold text-purple-400 mb-8 flex items-center">
        <Rocket className="w-8 h-8 mr-3 text-purple-300" />
        Blog Posts
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence>
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleSelect(blog)}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-xl hover:shadow-purple-500/20 cursor-pointer transform hover:-translate-y-1 transition-all duration-200"
            >
              <h2 className="text-2xl font-semibold text-purple-300">{blog.title}</h2>
              <div className="flex items-center text-gray-400 mt-2">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{blog.date}</span>
              </div>
              {/* You could add tags or excerpt preview here */}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BlogPage;