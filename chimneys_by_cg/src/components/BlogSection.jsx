// src/components/BlogSection.jsx
import React from 'react';
import './BlogSection.css';

const blogPosts = [
  { image: '/blog/IMG1.jpg'},
  { image: '/blog/IMG2.jpg' },
  { image: '/blog/IMG3.jpg' },
  { image: '/blog/IMG4.jpg' },
  { image: '/blog/IMG5.jpg' },
  { image: '/blog/IMG6.jpg' },
  { image: '/blog/IMG7.jpg' },
  { image: '/blog/IMG8.jpg' },
  { image: '/blog/IMG9.jpg' },
];

function BlogSection() {
  return (
    <section className="blog-section">
      <h2>Latest Blog Posts</h2>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <div className="post" key={index}>
            <img src={post.image} alt={`Blog post ${index + 1}`} className="post-image" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogSection;
