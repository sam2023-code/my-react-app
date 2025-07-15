// src/LanguageSwitcher.js
import React, { useState } from 'react';
import i18n from './i18n';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'eng'); // Track current language

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'eng' ? 'chi' : 'eng'; // Toggle between 'en' and 'zh'
    i18n.changeLanguage(newLanguage); // Change language dynamically
    localStorage.setItem('language', newLanguage); // Save language to localStorage
    setCurrentLanguage(newLanguage); // Update state
  };

  return (
    <button onClick={toggleLanguage} className='i18-button'>
      {currentLanguage === 'eng' ? '中文' : 'English'}
    </button>
  );
};

export default LanguageSwitcher;
