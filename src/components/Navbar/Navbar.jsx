
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
        <li>Home</li>
        <li>Products</li>
        <li>Features</li>
        <li>About</li>
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

/*
export default function Navbar() {
  const path = window.location.pathname;
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Site Name
      </a>
      <ul>
          <CustomLink href="/pricing">Pricing</CustomLink>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}


function CustomLink({ href, children, ...props }) {
  return (
    <li>
      <a href={href}>{children}</a>
    </li>
  );
}
*/