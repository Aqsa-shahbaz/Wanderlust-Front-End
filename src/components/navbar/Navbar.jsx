import React,{useState} from 'react';
import './navbar.css';
import Logo from '../../assets/logo.png';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import { Link } from 'react-router-dom';

const Menu = () =>(
  <>
    <p><Link to="/">Home</Link></p>
    <p><Link to ="/locations">Locations</Link></p>
    <p><Link to ="/packages">Packages</Link></p>
    <p><Link to="/aboutus">About us</Link></p>
    <p><Link to ="/contact">contact</Link></p>
  </>
)
const Navbar = () => {

  const [ToggleMenu,setToggleMenu] =useState(false);
  return (
     <div className='travel__navbar gradient__bg'>
      <div className='travel__navbar-links'>
        <div className ='travel__navbar-links_logo'>
          <img src={Logo} alt ="Logo" />
          <h1>WanderLust</h1>
        </div>
        </div>
        <div className='travel__navbar-links_container'>
          <Menu />
        </div>
      <div className='travel__navbar-signin'>
        <p>Register</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className='travel__navbar-menu'>
        {ToggleMenu
          ? <RiCloseLine color='#fff' size ={27} onClick= {()=>setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={()=> setToggleMenu(true)} />
        }
        {ToggleMenu && (
          <div className='travel__navbar-menu_container scale-up-center'>
            <div className='travel__navbar-menu_container-links'>
              <Menu />
              <div className='travel__navbar-menu_container-links-signin'>
                <p>Register</p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )
      }
      </div>
    </div>
  )
}

export default Navbar
