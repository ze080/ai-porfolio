import React from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from '../data/blogPosts';
import Week0 from '../blogs/Week0';
import Week1 from '../blogs/Week1';
const blogComponents = {
  'week0': Week0,
  'week1': Week1
};

const BlogPost = () => {
  const { slug } = useParams();
  const BlogComponent = blogComponents[slug];

  if (!BlogComponent) {
    return (
      <div className="text-center text-white mt-20">
        <h1 className="text-4xl font-bold text-red-500">404 - Blog Not Found</h1>
        <p className="text-gray-400 mt-4">
          Check the URL or return to the <a href="/" className="underline text-purple-400">home page</a>.
        </p>
      </div>
    );
  }

  return <BlogComponent posts={blogPosts} currentSlug={slug} />;
};

export default BlogPost;