// Article.js for locations 
import React from 'react';
import './article.css';
import { Link } from 'react-router-dom';

const Article = ({ imgurl, placename, title }) => {
  return (
    <div className='article__container'>
      <div className='article__container-image'>
        <img src={imgurl} alt="location_image" />
      </div>
      <div className='article__container-content'>
        <div>
          <p>{placename}</p>
          <h4>{title}</h4>
        </div>
        <p>
          <Link to={`/description/${title.toLowerCase()}`}>Read Full Description</Link>
        </p>
      </div>
    </div>
  );
}

export default Article;
