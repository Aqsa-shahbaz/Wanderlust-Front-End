import React from 'react';
import './packages.css';
import {Greece,Turkey,Pakistan} from '../locations/imports.js';
import Articlepkg from '../../components/articlepkg/Articlepkg';
import {Link} from 'react-router-dom';
const Packages = () => {
  return (
    <div className='gradient__bg section__padding'>
      <div className='packages-heading'>
        <h1>Packages</h1>
        <h3> <Link to='/'>Back-to-Home</Link></h3>
      </div>
      <div className='packages-container'>
      <div className='packages__container-images'>
                <Articlepkg imgurl={Greece} placename="Oia Castle" title="Greece" price= "$1500.0"/>
                <Articlepkg imgurl={Turkey} placename="Hagia Sophia" title="Turkey" price="$1000.50"/>
                <Articlepkg imgurl={Pakistan} placename="Pakistan Monument" title="Pakistan" price ="$450.25"/>
            </div>
      </div>
      <div className='footer-info'>
        <p>Follow us on Social Media to get to know more about exciting packages.</p>

        <h3>Happy Travelling!</h3>
      </div>
    </div>
  )
}

export default Packages
