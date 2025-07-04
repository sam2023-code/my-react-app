/*
import React from 'react';
import './Navbar.css';
import logo_baby from '../../assets/logo_baby.png'
import search_icon_white from '../../assets/search_w.png'
import search_icon_black from '../../assets/search_b.png'
import toggle_day from '../../assets/day.png'
import toggle_night from '../../assets/night.png'

const Navbar = ( {theme, setTheme}  ) => {

    const toggle_mode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light') ;
    }

  return (
    <>
    <div className='navbar'>
      <img src={logo_baby} alt="" className='responsive-image logo' />
      <ul>
        <li><a href= "/">Home</a></li>
        <li ><a href= "/User_list">list</a></li>
        <li ><a href= "/about">About</a></li>
        <li ><a href= "/Useful_link">Link</a></li>
      </ul>
        
      
      <div className='search-box'>
        <input type='text' placeholder='Search' />
        <img src={ theme == 'light'? search_icon_white : search_icon_black  }  alt="" className="responsive-image" />
      </div>
      

      <img onClick ={() => toggle_mode() } 
        src={ theme == 'light'? toggle_day : toggle_night  } 
        alt="" className='responsive-image toggle-icon' 
      />

    </div> 
    </>
  );
};

export default Navbar; 
*/

import React from 'react';
import './Navbar.css';
import logo_baby from '../../assets/logo_baby.png'
import search_icon_white from '../../assets/search_w.png'
import search_icon_black from '../../assets/search_b.png'
import toggle_day from '../../assets/day.png'
import toggle_night from '../../assets/night.png'

import { BrowserRouter  as Router, Routes, Route, Link } from 'react-router-dom'; 


const Navbar = ( {theme, setTheme}  ) => {

    const toggle_mode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light') ;
    }

  return (
    <>
    <div className='navbar'>
      <img src={logo_baby} alt="" className='responsive-image logo' />
      
      <ul>
        <li><Link to= "/">Home</Link></li>
        <li><Link to= "/User_list">list</Link></li>
        <li><Link to= "/about">About</Link></li>
        <li><Link to= "/Useful_link">Link</Link></li>
      </ul>
        

      
      <div className='search-box'>
        <input type='text' placeholder='Search' />
        <img src={ theme == 'light'? search_icon_white : search_icon_black  }  
        alt="" 
        className="responsive-image" />
      </div>
      

      <img onClick ={() => toggle_mode() } 
        src={ theme == 'light'? toggle_day : toggle_night  } alt="" 
        className='responsive-image toggle-icon' 
      />

    </div> 
    </>
  );
};

export default Navbar; 

