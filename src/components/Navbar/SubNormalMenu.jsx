import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SubNormalMenu = () => {

    const { t } = useTranslation();
    

return (
    <>
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
    
    </>
);
};

export default SubNormalMenu; 