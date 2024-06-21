import React from 'react';
import './ourdetails.css';

const Ourdetails = ({imgurl,title,details}) => {
  return (
    <div className='ourdetails-container'>
      <div className='ourdetails-container-image'>
        <img src = {imgurl} alt='image'/>
      </div>
      <div className='ourdetails-container-content'>
        <div>
            <h3>{title}</h3>
            <p>{details}</p>
        </div>
      </div>
    </div>
  )
}

export default Ourdetails
