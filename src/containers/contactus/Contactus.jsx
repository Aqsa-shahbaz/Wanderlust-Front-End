import React from 'react';
import './contactus.css';
import contact from '../../assets/contact.jpg';
import { Facebook, Instagram, Twitter, Email, Phone, Location } from '../../components/footer/imports';
import {Link} from 'react-router-dom';
const Contactus = () => {
  return (
    <div className=' gradient__bg'>
    <div className='contact-heading'>
        <h1>Contact Us</h1>
        <h3> <Link to='/'>Back-to-Home</Link></h3>
      </div>
    <div className=' section__padding'>
        <div className='contact-box '>
          <img src={contact} alt="Contact" />
            <p >If you have any questions, feedback, or inquiries, we'd love to hear from you! Our dedicated team is here to assist you in any way we can. Whether you're seeking more information about our products or services, interested in collaborations, or simply want to say hello, don't hesitate to reach out. You can contact us via phone, email, or through social media . We strive to respond promptly to all inquiries and ensure your experience with us is seamless. Thank you for considering us as your trusted partner. We look forward to connecting with you soon!</p>
      </div>
      <div className='contact-links-box'>
        <div className='contact-links-details'>
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
      </div>
    </div>
    </div>
  );
}

export default Contactus;
