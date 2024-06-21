import React from 'react';
import './pkgdescription.css';
import { useParams, Link } from 'react-router-dom';
import {Greece1,Greece2, Greece3,Turkey1,Turkey2,Turkey3,Pakistan1,Pakistan2,Pakistan3} from '../descriptions/import.js';
const description ={
  greece:{
    title: "Explore Greece: Land of Ancient Wonders and Stunning Landscapes.",
    details: "Unveil the magic of Greece, a country where ancient history, stunning landscapes, and vibrant culture come together to create an unforgettable travel experience. This all-encompassing travel package is designed to showcase the very best of Greece, from its iconic archaeological sites to its breathtaking islands and delicious cuisine. Whether you're walking through the ruins of ancient civilizations, relaxing on pristine beaches, or indulging in Greek hospitality, this journey promises a wealth of memorable moments.",
    title1: "Highlights",
    Image1: Greece1,
    details1partA: "Discover the Athens vibrant capital where ancient history blends with modern city life. Visit iconic landmarks like the Acropolis and Parthenon, and explore the charming Plaka district.Experience the romance of Santorini island known for its stunning sunsets over the Aegean Sea. Wander through cliff-perched villages, savor local cuisine, and enjoy fine wine.",
    details1partB: "Embrace the cosmopolitan atmosphere of Mykonos with picturesque windmills and vibrant nightlife. Relax on beautiful beaches or explore boutique-lined streets and cafes.",
    details1partC: "Dive into Crete's rich history with visits to ancient Minoan ruins at Knossos. Explore diverse landscapes from rugged mountains to pristine beaches, and savor authentic Cretan hospitality and cuisine.",

    title2: "Package Details",
    Image2: Greece2,
    details2partA: "Duration: 10 days, customizable to suit your preferences.",
    details2partB: "Accommodation: Handpicked hotels and resorts offering comfort and convenience.",
    details2partC: "Activities: Guided tours of historical sites, leisurely beach days, culinary experiences, and more.",
    details2partD :"Transportation: Flights between Athens and the islands, as well as ground transfers, included.",
    title3: "Why Choose Us",
    Image3: Greece3,
    details3partA:"Expertise: Our team has extensive knowledge of Greece, ensuring a seamless and enriching travel experience.",
    details3partB: "Personalization: Tailor your itinerary to include specific interests or additional destinations.",
    details3partC: "Support: 24/7 assistance throughout your journey, from booking to return.",
  },
  turkey: {
      title:"Discover the Magic of Turkey: A Journey Through Time and Beauty",
      details: "Embark on an unforgettable adventure to Turkey, a land where East meets West, history blends with modernity, and stunning landscapes captivate every traveler. This comprehensive travel package is designed to offer a rich and immersive experience, showcasing Turkey's most iconic destinations, cultural treasures, and natural wonders. Whether you're exploring ancient ruins, strolling through vibrant bazaars, or soaking in the serene beauty of the Turkish Riviera, this trip promises memories that will last a lifetime.",
      title1: "Highlights",
      Image1: Turkey1,
      details1partA: " Begin your journey in Istanbul, Turkey's bustling metropolis that bridges Europe and Asia. Explore the grandeur of the Hagia Sophia, the Blue Mosque, and the opulent Topkapi Palace. Wander through the historic Grand Bazaar and savor the flavors of Turkish cuisine in lively local restaurants.",
      details1partB: " Experience the otherworldly landscapes of Cappadocia. Marvel at the unique rock formations, take a hot air balloon ride at sunrise, and explore ancient cave dwellings and underground cities.",
      details1partC: "Relax along the stunning Turquoise Coast. Enjoy pristine beaches, crystal-clear waters, and charming seaside towns like Antalya and Bodrum. Engage in water sports, explore ancient ruins, or simply unwind under the Mediterranean sun.",
  
      title2: "Package Details",
      Image2: Turkey2,
      details2partA: "Duration: 14 days, customizable to suit your preferences.",
      details2partB: "Accommodation: Handpicked hotels and resorts offering comfort and convenience.",
      details2partC: "Activities: Guided tours of historical sites, leisurely beach days, culinary experiences, and more.",
      details2partD :"Transportation: Flights between different cities, as well as ground transfers, included.",
      title3: "Why Choose Us",
      Image3: Turkey3,
      details3partA:"Expertise: Our team has extensive knowledge of Turkey, ensuring a seamless and enriching travel experience.",
      details3partB: "Personalization: Tailor your itinerary to include specific interests or additional destinations.",
      details3partC: "Support: 24/7 assistance throughout your journey, from booking to return.",
  },
  pakistan:{
    title:"Discover Pakistan: A Journey of Untamed Beauty and Rich Heritage",
    details: "Embark on an extraordinary adventure to Pakistan, a country that boasts a rich tapestry of culture, history, and breathtaking landscapes. From the towering peaks of the Himalayas to the vibrant bazaars of ancient cities, this travel package offers an immersive experience into the heart of Pakistan. Discover the unparalleled natural beauty, historical landmarks, and the warm hospitality that makes Pakistan a truly unique destination.",
    title1: "Highlights",
    Image1: Turkey1,
    details1partA: " Start your journey in the capital city, Islamabad. Visit the stunning Faisal Mosque, one of the largest mosques in the world, and explore the serene Daman-e-Koh for panoramic views of the city. Wander through the Lok Virsa Museum to delve into Pakistan's diverse cultural heritage.",
    details1partB: " Be captivated by the breathtaking beauty of the Hunza Valley. Surrounded by snow-capped peaks, this serene valley offers spectacular views and a chance to explore ancient forts like Baltit and Altit. Engage with the local Hunza people and learn about their unique culture and traditions.",
    details1partC: "Venture into the rugged landscapes of Skardu, the gateway to some of the world's highest mountains, including K2. Marvel at the crystal-clear waters of Shangrila Lake, also known as Heaven on Earth, and explore the historical Skardu Fort.",

    title2: "Package Details",
    Image2: Turkey2,
    details2partA: "Duration: 11 days, customizable to suit your preferences.",
    details2partB: "Accommodation: Handpicked hotels and resorts offering comfort and convenience.",
    details2partC: "Activities: Guided tours of historical sites, leisurely beach days, culinary experiences, and more.",
    details2partD :"Transportation: Flights between different cities, as well as ground transfers, included.",
    title3: "Why Choose Us",
    Image3: Turkey3,
    details3partA:"Expertise: Our team has extensive knowledge of Pakistan, ensuring a seamless and enriching travel experience.",
    details3partB: "Personalization: Tailor your itinerary to include specific interests or additional destinations.",
    details3partC: "Support: 24/7 assistance throughout your journey, from booking to return.",
  },
};
function Pkgdescription() {

  const { id } = useParams();
  const location = description[id.toLowerCase()]; 

  return (
    <div className='pkg__description section__padding'>
      <h3><Link to ="/packages">Back-to-Packages</Link></h3>
      <div className='pkg__description-heading'>
        <h1>{location.title}</h1>
        <p>{location.details}</p>
      </div>
      <div className='pkgdescription-box-content'>
        <div className='pkgdescription-box'>
          <h2>{location.title1}</h2>
          <img src={location.Image1}/>
          <ul>
          <li>{location.details1partA}</li>
          <li>{location.details1partB}</li>
          <li>{location.details1partC}</li>
          </ul>
          </div>
          <div className='pkgdescription-box'>
          <h2>{location.title2}</h2>
          <img src={location.Image2}/>
          <ul>
            <li>{location.details2partA}</li>
            <li>{location.details2partB}</li>
            <li>{location.details2partC}</li>
            <li>{location.details2partD}</li>
          </ul>
          </div>
          <div className='pkgdescription-box'>
          <h2>{location.title3}</h2>
          <img src={location.Image3}/>
          <ul>
            <li>{location.details3partA}</li>
            <li>{location.details3partB}</li>
            <li>{location.details3partC}</li>
          </ul>
          </div>
        </div>
        <div className='get__started'>
            <div className='get__started-content'>
              <p>Request Early Access to Get Started</p>
                <h3>Book today & start exploring the endless oppurtunities</h3>
            </div>
            <div className='get__started-btn'>
                <button type ="button">Book Now</button>
            </div>
        </div>
      </div>
  )
}

export default Pkgdescription
