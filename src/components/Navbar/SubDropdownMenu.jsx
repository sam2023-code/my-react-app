import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './SubDropdownMenu.css';

import { useTranslation } from 'react-i18next';

import Subpage_list_admin from './Subpage_list_admin.jsx'
import Subpage_list_user from './Subpage_list_user.jsx'
import Subpage_list_visitor from './Subpage_list_visitor.jsx'

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { t } = useTranslation();
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside, { capture: true });

    return () => {
      document.removeEventListener('click', handleClickOutside, { capture: true });
    };
  }, []);

  return (
    <div className="dropdown"  ref={dropdownRef}  >
      <button className="dropbtn" onClick={toggleDropdown}>
         {t('Navbar_sub_page')}  
        <i className="fa fa-caret-down"></i>
      </button>
      {isOpen && (
        <div className="dropdown-content">



                    {sessionStorage.getItem('isLoggedIn') === 'true' ?

                        sessionStorage.getItem('login_username')  === "admin" ?
                        <Subpage_list_admin />
                        :
                          sessionStorage.getItem('login_type')  === "user" ?
                          <Subpage_list_user />
                          :
                          <Subpage_list_visitor/>
                      :
                      <></>
                    }

        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

/*
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SubDropdownMenu.css';

import { useTranslation } from 'react-i18next';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation();
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={toggleDropdown}>
         {t('Navbar_sub_page')}  
        <i className="fa fa-caret-down"></i>
      </button>
      {isOpen && (
        <div className="dropdown-content">

                    {sessionStorage.getItem('login_type')  === "user" ?
                        <ul>
                          <li><Link to= "/">{t('Navbar_home')} </Link></li>
                          <li><Link to= "/user_list">{t('Navbar_list')}</Link></li>
                          <li><Link to= "/about">{t('Navbar_about')}</Link></li>
                          <li><Link to= "/useful_link">{t('Navbar_link')}</Link></li>
                          <li><Link to= "/diary">{t('Navbar_diary')}</Link></li>
                        </ul>
                      :
                        <ul>
                          <li><Link to= "/">{t('Navbar_home')}</Link></li>
                          <li><Link to= "/about">{t('Navbar_about')}</Link></li>
                          <li><Link to= "/useful_link">{t('Navbar_link')}</Link></li>
                          <li><Link to= "/diary">{t('Navbar_diary')}</Link></li>
                        </ul>
                    
                    }

        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
*/