// src/components/BlogSection.jsx
import React from 'react';
import ./Blog.jsx;

function BlogSection() {
  return (
    <section className="blog-section">
      <h2>Latest Blog Posts</h2>
      <div className="blog-posts">
        {/* Placeholder for blog posts */}
        <div className="post">
          <h3>Blog Post Title</h3>
          <p>Summary of the blog post...</p>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
