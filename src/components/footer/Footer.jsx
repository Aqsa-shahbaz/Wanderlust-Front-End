import React from 'react';
import './footer.css';
import { Facebook, Instagram, Twitter, Email, Phone, Location } from './imports';

const Footer = () => {
  return (
    <div className='footer-section'>
      <div>
        <img src={Facebook} alt="Facebook"/>
        <p>wanderlust</p>
      </div>
      <div>
        <img src={Instagram} alt="Instagram"/>
        <p>wander_lust</p>
      </div>
      <div>
        <img src={Twitter} alt="Twitter"/>
        <p>WanderLust</p>
      </div>
      <div>
        <img src={Phone} alt="Phone"/>
        <p>03011234560</p>
      </div>
      <div>
        <img src={Location} alt="Location"/>
        <p>Karachi, Pakistan</p>
      </div>
      <div>
        <img src={Email} alt="Email"/>
        <p>Wanderlust@gmail.com</p>
      </div>
    </div>
  );
}

export default Footer;
