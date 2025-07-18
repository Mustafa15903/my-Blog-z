import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page">
      <h1>Welcome to My Blog 👨‍💻 </h1>
      <div className="intro" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' , fontStyle: 'italic'}}>
      <p>Hello, my name is Mustafa. My nickname is Zashh, 
        a name I gave myself inspired by Zeus, the mythical Greek god, because at one point in my life I was fascinated by mythology.
      </p>
      <p>I’m a creative writer, art lover, and web developer, aspiring to become a successful programmer.
      </p>
      <p>I always move from one experience to another — either I win or I learn a lesson.
      </p>
      <p>"One day, we will win life's bet, for our struggle for our dreams was never in vain."
      </p>
      <Link to="/blog" className="button">Visit Blog</Link>
    </div>
    </div>
  );
}

export default Home;