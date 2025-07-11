import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page">
      <h1>Welcome to My Blog</h1>
      <p>This is the homepage with latest posts.</p>
      <Link to="/blog" className="button">Visit Blog</Link>
    </div>
  );
}

export default Home;