import React from 'react';
import './header.css';
import background from '../../assets/background.mp4';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
const Header = () => {
  return (
    <div>
    <Navbar />
    <div className="video-container section__padding">
      <video className="video-background" autoPlay loop muted>
        <source src={background} type="video/mp4" />
      </video>
      < div className="video-overlay">
        <h1 className='gradient__text'>Find Your Next Destination</h1>
        <p >Embark on a journey beyond the ordinary with our unparalleled travel experiences and affordable packages. </p>
        <div className='video-overlay__input'>
          <input type="email" placeholder='Enter your email' />
          <button type='button'>Get Started</button>
        </div>
        <div className='contactus-section'>
        </div>
        <div className='video-footer' >
        <Footer />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Header;
