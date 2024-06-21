import React from 'react';
import './App.css';
import Header from './containers/header/Header';
import AboutUs from './containers/aboutus/Aboutus';
import Contactus from './containers/contactus/Contactus';
import Locations from './containers/locations/Locations';
import Packages from './containers/packages/Packages';
import Descriptions from './components/descriptions/Descriptions';
import PackageDescription from './components/pkgdescription/Pkgdescription';

import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <div className='App'>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path='/contact' element={<Contactus />}/>
            <Route path ="/locations" element={<Locations />}/>
            <Route path ="/packages" element={<Packages />} />
            <Route path="/description/:id" element={<Descriptions />} />
            <Route path="/pkgdescription/:id" element={<PackageDescription />}/>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
