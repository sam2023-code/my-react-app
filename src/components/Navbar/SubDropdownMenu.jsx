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
