import React from 'react';
import './aboutus.css';
import {Mission,Values,Offers,Community} from './imports';
import Ourdetails from '../../components/ourdetails/Ourdetails';
import {Link} from 'react-router-dom'; 
const Aboutus = () => {
  return (
    <div className='gradient__bg'>
        <div className='aboutus-section'>
            <div className='aboutus-section_heading'>
                <h1>About Us</h1>
                <h3> <Link to='/'>Back-to-Home</Link></h3>
            </div>
        </div>
        <div className='about-us section__padding'>
            <div className='aboutus-section_container'>
                <div className='aboutus-section_container_A'>
                    <Ourdetails imgurl ={Mission} title="Our Mission" details="At WanderLust, our mission is simple: to provide travelers with personalized, hassle-free travel experiences that exceed their expectations. Whether you're seeking a tranquil beach getaway, an exhilarating adventure, or a cultural immersion, we are here to tailor each trip to your unique desires and preferences"/>
                    <Ourdetails imgurl ={Values} title="Our Values" details="As avid travelers, we understand the transformative power of travel and are dedicated to helping you explore the world.
                    Your satisfaction is our top priority. We listen, advise, and provide exceptional service every step of the way.
                    We promote responsible travel practices that protect the environment and support local communities."/>
                    <Ourdetails imgurl ={Offers} title="What we Offer" details="As avid travelers, we At WanderLust, provide expertly curated travel packages to suit all interests and budgets, from luxurious retreats to budget-friendly adventures. We partner with local experts to grant you exclusive access to hidden gems and off-the-beaten-path locations, ensuring you experience each destination's true essence. Our dedicated travel consultants create customized itineraries tailored to your preferences, delivering a personalized travel experience. Additionally, our comprehensive support team is available 24/7, assisting you from the planning stage until you return home. understand the transformative power of travel and are dedicated to helping you explore the world.
                    Your satisfaction is our top priority. We listen, advise, and provide exceptional service every step of the way.
                    We promote responsible travel practices that protect the environment and support local communities."/>
                    <Ourdetails imgurl ={Community} title="Join our community" details ="Become a part of the WanderLust community and embark on journeys that not only explore the world but also connect with its people and cultures. Follow us on social media, and join our travel forums to stay updated with the latest travel trends, tips, and exclusive offers."/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutus
