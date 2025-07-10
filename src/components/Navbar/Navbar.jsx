import React , {useState } from 'react';
import './Navbar.css';
import logo_baby from '../../assets/logo_baby.png'
import search_icon_white from '../../assets/search_w.png'
import search_icon_black from '../../assets/search_b.png'
import toggle_day from '../../assets/day.png'
import toggle_night from '../../assets/night.png'

import { BrowserRouter  as Router, Routes, Route, Link } from 'react-router-dom'; 

import Login_check from '../Login/Login_check.jsx';

import I18_lang from '../../i18n.jsx';
import { useTranslation } from 'react-i18next';

const Navbar = ( {theme, setTheme}  ) => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true'; // 检查登录状态
  const login_user_or_visitor = sessionStorage.getItem('login_type')  ;

    const toggle_mode = () => 
    {
        theme == 'light' ? setTheme('dark') : setTheme('light') ;
    }

    const handleLogout = () => 
    {
        if (isLoggedIn )
        {
          sessionStorage.clear(); // Clear session data
          sessionStorage.setItem('isLoggedIn', 'false');
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
      
      {login_user_or_visitor === "user" ?
          <ul>
            <li><Link to= "/">{t('Navbar_home')} </Link></li>
            <li><Link to= "/user_list">{t('Navbar_list')}</Link></li>
            <li><Link to= "/about">{t('Navbar_about')}</Link></li>
            <li><Link to= "/useful_link">{t('Navbar_link')}</Link></li>
          </ul>
        :
          <ul>
            <li><Link to= "/">{t('Navbar_home')}</Link></li>
            <li><Link to= "/about">{t('Navbar_about')}</Link></li>
            <li><Link to= "/useful_link">{t('Navbar_link')}</Link></li>
          </ul>
      
      }
      
      <div className='search-box'>
        <input type='text' placeholder='Search' />
        <img src={ theme == 'light'? search_icon_white : search_icon_black  }  
        alt="" 
        className="responsive-image" />
      </div>
      
      <div className='I18-lang'> <I18_lang /> </div>

      <img onClick ={() => toggle_mode() } 
        src={ theme == 'light'? toggle_day : toggle_night  } alt="" 
        className='responsive-image toggle-icon' 
      />

    </div> 
    </>
  );
};

export default Navbar; 

/*


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

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // 检查登录状态

    const toggle_mode = () => 
    {
        theme == 'light' ? setTheme('dark') : setTheme('light') ;
    }

    const handleLogout = () => 
    {
        if (isLoggedIn )
        {
          localStorage.setItem('isLoggedIn', 'false');
          window.location.reload();
        }
    };

  return (
    <>
    <div className='navbar'>

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


*/