import React from 'react';
import './ArticleCard.css';

const ArticleCard = ({ id, title, children }) => {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
};

export default ArticleCard;
