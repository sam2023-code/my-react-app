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

import React , {useState } from 'react';
import './Navbar.css';
import logo_baby from '../../assets/logo_baby.png'
import search_icon_white from '../../assets/search_w.png'
import search_icon_black from '../../assets/search_b.png'
import toggle_day from '../../assets/day.png'
import toggle_night from '../../assets/night.png'

import { BrowserRouter  as Router, Routes, Route, Link } from 'react-router-dom'; 

import Login_check from '../Login/Login_check.jsx';

const Navbar = ( {theme, setTheme}  ) => {

    // 使用自定義的 login check hook
    /*
  const [loginStatus, setLoginStatus] = useState(false);

  const handleLoginCheck = (status) => {
    setLoginStatus(status);
  };
  const isLoggedIn = Login_check(handleLoginCheck);
  */
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // 检查登录状态

    const toggle_mode = () => 
    {
        theme == 'light' ? setTheme('dark') : setTheme('light') ;
    }

    const handleLogout = () => 
    {
        if (isLoggedIn )
        {
          //localStorage.removeItem('token');
          //handleLoginCheck(false);
          localStorage.setItem('isLoggedIn', 'false');
          window.location.reload();
        }
    };

  return (
    <>
    <div className='navbar'>
      {/* <img src={logo_baby} alt="" className='responsive-image logo' />*/ }
      <img src={logo_baby} alt="" 
          onClick={ handleLogout }
      className='responsive-image logo' />
      
      <ul>
        <li><Link to= "/">Home</Link></li>
        <li><Link to= "/user_list">list</Link></li>
        <li><Link to= "/about">About</Link></li>
        <li><Link to= "/useful_link">Link</Link></li>
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

