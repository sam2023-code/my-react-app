import React , {useState } from 'react';
import './Navbar.css';
import logo_baby from '../../assets/logo_baby.png'
import search_icon_white from '../../assets/search_w.png'
import search_icon_black from '../../assets/search_b.png'
import toggle_day from '../../assets/day.png'
import toggle_night from '../../assets/night.png'
import logo_logout from '../../assets/logout.png'

import { BrowserRouter  as Router, Routes, Route, Link } from 'react-router-dom'; 

import Login_check from '../Login/Login_check.jsx';
import SearchComponent from '../Search/SearchComponent.jsx';

import SubDropdownMenu from './SubDropdownMenu.jsx';
import SubNormalMenu from './SubNormalMenu.jsx';
import ResponsiveComponent from './ResponsiveComponent.jsx';

import  '../../i18n.jsx';
import LanguageSwitcher from '../../LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Navbar = ( {theme, setTheme}  ) => {

  const { t } = useTranslation();

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
      <img src={logo_baby} alt="" className='responsive-image logo' />

      {isLoggedIn ?
            <>
                <img src={logo_logout} alt="" onClick={ handleLogout } className='responsive-image logo' />
            </>
        :
            <></>
      }

      <div className='navbar-list'> <ResponsiveComponent/> </div>

      
      <div className='search-box'>
        <input type='text' placeholder='Search' />
        <img src={ theme == 'light'? search_icon_white : search_icon_black  }  
        alt="" 
        className="responsive-image" />
      </div>



      <div className='I18-lang'> <LanguageSwitcher /> </div>
  


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