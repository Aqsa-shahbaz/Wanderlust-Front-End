import React from 'react';
import './articlepkg.css';
import { Link } from 'react-router-dom';

function Articlepkg({ imgurl, placename, title,price }) {
  return (
    <div className='article__container'>
    <div className='article__container-image'>
      <img src={imgurl} alt="packages_image" />
    </div>
    <div className='article__container-content'>
      <div>
        <p>{placename}</p>
        <h3>{title}</h3>
        <h4>{price}</h4>
      </div>
      <div className='button-container'>
            <button type='button'>Book Now</button>
      </div>
      <p>
        <Link to={`/pkgdescription/${title.toLowerCase()}`}>Read Full Description</Link>
      </p>
    </div>
  </div>
  )
}

export default Articlepkg
