
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
      <img src="" alt="" className='logo' />
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Features</li>
        <li>About</li>
      </ul>
      <div className='search-box'>
        <input type='text' placeholder='Search' />
        <img src="" alt="" />
      </div>

      <img src="" alt="" className='toggle-icon' />

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