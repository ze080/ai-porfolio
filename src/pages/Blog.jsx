import React, { useState } from 'react';
import blogs from '../blogs';

const BlogPage = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleSelect = (blog) => {
    setSelectedBlog(blog);
    window.scrollTo(0, 0); // scroll to top on open
  };

  if (selectedBlog) {
    const { Component } = selectedBlog;
    return <Component />;
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 text-white">
      <h1 className="text-4xl font-bold text-purple-400 mb-8">📝 Blog Posts</h1>
      <div className="space-y-6">
        {blogs.map((blog) => (
          <div
            key={blog.slug}
            className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-purple-400/20 transition cursor-pointer"
            onClick={() => handleSelect(blog)}
          >
            <h2 className="text-2xl font-semibold text-purple-300">{blog.title}</h2>
            <p className="text-gray-400 mt-1">{blog.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
