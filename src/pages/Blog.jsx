import React from 'react';
import { Link } from 'react-router-dom';

function Blog() {
  // مثال لبيانات المدونة (يمكن استبدالها ببيانات حقيقية من API)
  const posts = [
    { id: 1, title: 'First Post', excerpt: 'This is my first blog post.' },
    { id: 2, title: 'React Tips', excerpt: 'How to use React Router.' },
  ];

  return (
    <div className="page">
      <h1>Blog Posts</h1>
      <div className="posts">
        {posts.map(post => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <Link to={`/post/${post.id}`}>Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;