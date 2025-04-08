import React from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from '../data/blogPosts';
import Week0 from '../blogs/Week0';
import Week1 from '../blogs/Week1';

const blogComponents = {
  'week0': Week0,
  'week1': Week1
};

const BlogPostTest = () => {
  const { slug } = useParams();
  const BlogComponent = blogComponents[slug];

  if (!BlogComponent) {
    return <div>Blog not found</div>;
  }

  return (
    <BlogComponent 
      posts={blogPosts}
      currentSlug={slug}
    />
  );
};

export default BlogPostTest;
