// Descriptions.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './descriptions.css';
import {Greece, Turkey,Pakistan, Italy,Spain,Barcelona} from '../../containers/locations/imports.js';
import {Greece1,Greece2,Greece3,Turkey1,Turkey2,Turkey3,Pakistan1,Pakistan2,Pakistan3,Italy1,Italy2,Italy3,Spain1,Spain2,Spain3,Barcelona1,Barcelona2,Barcelona3} from './import.js';
const descriptions = {
  greece: {
    placename: "Oia Castle",
    title: "Greece",
    details: "Nestled on the northern tip of Santorini, Oia Castle offers breathtaking panoramic views of the Aegean Sea and the island’s iconic white-washed architecture. Known for its stunning sunsets, the castle ruins attract visitors from around the world who come to witness the sky's vibrant hues as the sun dips below the horizon. Wandering through the narrow, winding streets of Oia, travelers can explore charming shops, traditional tavernas, and art galleries that showcase the island’s rich culture and history. The castle itself, though mostly in ruins, serves as a poignant reminder of Santorini's storied past and is a must-visit for anyone seeking to experience the timeless beauty of the Greek islands.",
    Image : Greece,

    Image1: Greece1,
    Image2:Greece2,
    Image3:Greece3,
  },
  turkey: {
    placename: "Hagia-Sophia",
    title: "Turkey",
    details: "Hagia Sophia, located in Istanbul, Turkey, is a magnificent architectural marvel and a symbol of the city's rich history. Originally constructed as a cathedral in 537 AD during the Byzantine Empire, it later became a mosque under Ottoman rule and is now a museum. Its stunning dome, intricate mosaics, and grand interior reflect a blend of Christian and Islamic influences, making it a unique and culturally significant site. Visitors can marvel at the vast nave, adorned with historical art and calligraphy, and experience the serene beauty of one of the world’s most iconic landmarks. Hagia Sophia's profound historical significance and breathtaking beauty make it a must-visit destination for travelers exploring Istanbul.",
    Image: Turkey,

    Image1: Turkey1,
    Image2: Turkey2,
    Image3: Turkey3,
  },
  pakistan: {
    placename: "Pakistan Monument",
    title: "Pakistan",
    details: "The Pakistan Monument, located in Islamabad, stands as a national symbol of unity and heritage. Shaped like a blooming flower, the monument features four main petals representing the four provinces, while the smaller petals symbolize the regions of Gilgit-Baltistan and Azad Kashmir. The inner walls of the monument showcase intricate artwork depicting pivotal moments in Pakistan's history, making it a cultural and educational treasure. Surrounded by lush gardens and offering panoramic views of the capital city, the Pakistan Monument is a must-visit destination for travelers seeking to explore the rich historical and cultural tapestry of Pakistan.",
    Image: Pakistan,

    Image1: Pakistan1,
    Image2: Pakistan2,
    Image3: Pakistan3,
  },
  italy: {
    placename: "COLOSSEUM",
    title: "Italy",
    details: "The Colosseum, an iconic symbol of ancient Rome, stands as a testament to the engineering prowess and cultural significance of the Roman Empire. Located in the heart of Rome, Italy, this grand amphitheater once hosted gladiatorial combats, public spectacles, and theatrical performances, captivating audiences with its scale and grandeur. Built between 70-80 AD, the Colosseum's enduring structure, capable of seating up to 50,000 spectators, continues to fascinate visitors from around the world. As one of Italy's most treasured landmarks, the Colosseum offers a glimpse into Rome's rich history, making it an essential destination for any traveler seeking to explore the legacy of the ancient world.",
    Image: Italy,

    Image1: Italy1,
    Image2: Italy2,
    Image3: Italy3,
  },
  spain: {
    placename: "Park Guell",
    title: "Spain",
    details: "Park Güell, located in Barcelona, Spain, is one of the most famous and visually striking parks in the world. Designed by the renowned architect Antoni Gaudí, this UNESCO World Heritage site blends natural beauty with Gaudí's distinctive architectural style, characterized by vibrant mosaics, organic shapes, and whimsical structures. Visitors can explore the park's winding pathways, colorful tiled benches, and the iconic dragon fountain, all set against the backdrop of stunning views of Barcelona. A visit to Park Güell offers a unique glimpse into Gaudí's genius and the rich cultural heritage of Catalonia.",
    Image: Spain,
    Image1: Spain1,
    Image2: Spain2,
    Image3: Spain3,
  },
  barcelona: {
    placename: "BASILICA DE LA SAGRADA FAMILIA",
    title: "Barcelona",
    details: "The Basilica de la Sagrada Familia in Barcelona is an architectural masterpiece designed by the renowned architect Antoni Gaudí. This iconic basilica, still under construction since 1882, showcases a unique blend of Gothic and Art Nouveau styles. Visitors are captivated by its intricate facades, symbolic sculptures, and towering spires. Inside, the basilica's stunning stained glass windows bathe the interior in a kaleidoscope of colors, creating an ethereal atmosphere. As one of Barcelona's most visited landmarks, the Sagrada Familia offers a profound experience of art, spirituality, and history, making it a must-see destination for travelers.",
    Image: Barcelona,

    Image1: Barcelona1,
    Image2: Barcelona2,
    Image3: Barcelona3,
  },
};

const Descriptions = () => {
  const { id } = useParams();
  const location = descriptions[id.toLowerCase()]; 

  return (
    <div className='gradient__bg section__padding'>
    <div className='description__container'>
        <div className='description__heading'>
            <div>
            <h2>{location.placename}</h2>
            <h1>{location.title}</h1>
            </div>
        <h3><Link to ="/locations">Back-to-Locations</Link></h3>
        </div>
        < div className ='description__container-contents'>
        <div className='description-box'>
            {location ? (
                <>
                <img src={location.Image}/>
                <p>{location.details}</p>
                </>
            ) : (
                <p>Location not found</p>
            )}
            </div>
            <div className='location__images'>
                <img src={location.Image1}/>
                <img src={location.Image2}/>
                <img src={location.Image3}/>
            </div>
    </div>
    </div>   
    </div>
  );
}

export default Descriptions;
