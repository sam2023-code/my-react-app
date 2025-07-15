import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Logout.css';
import logo_baby from '../../assets/logo_baby.png'
import { useTranslation } from 'react-i18next';


const Logout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation();
  
 
    const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <>
    {sessionStorage.getItem('isLoggedIn') === 'true' ?

    
    <div className="dropdown"         onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} >
      <img className='responsive-image'        
        src= {logo_baby} 
        alt="Hover to show dropdown" 
        style={{ cursor: 'pointer', width: '200px', height: 'auto' }} 
      />

      {isOpen && (
               <ul style={{ border: '1px solid #ccc', padding: '10px', marginTop: '5px', listStyleType: 'none' }}>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      )}
    </div>

      :

      <></>
    }


    </>
  );
};

export default Logout;
