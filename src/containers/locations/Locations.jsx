import React from 'react';
import './locations.css';
import { Greece,Turkey,Pakistan,Italy,Spain,Barcelona} from './imports.js';
import Article from '../../components/article/Article';
import {Link} from 'react-router-dom';

const Locations = () => {
  return (
    <div className='gradient__bg section__padding'>
        <div className='locations__heading' >
            <h1>Locations </h1>
            <h3> <Link to='/'>Back-to-Home</Link></h3>
        </div>
        <div className='locations__container'>
            <div className='locations__container-images'>
                <Article imgurl={Greece} placename="Oia Castle" title="Greece"/>
                <Article imgurl={Turkey} placename="Hagia-Sophia" title="Turkey"/>
                <Article imgurl={Pakistan} placename="Pakistan Monument" title="Pakistan"/>
                <Article imgurl={Italy} placename="COLOSSEUM" title="Italy"/>
                <Article imgurl={Spain} placename="Park Guell" title="Spain"/>
                <Article imgurl={Barcelona} placename="BASILICA DE LA SAGRADA FAMILIA" title="Barcelona"/>
            </div>
        </div>
    </div>
  )
}

export default Locations
