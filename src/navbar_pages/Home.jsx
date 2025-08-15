import React, { useState, useEffect } from 'react';

import logo_Home_Jason from '../assets/Home_Jason.jpg'
import logo_Home_Jason_birth from '../assets/Home_Jason_Birthday.jpg'
import logo_Home_Jason_250531 from '../assets/Jason_250531.jpg'
import logo_Home_Jason_250607 from '../assets/Jason_250607.jpg'
import '../css/home.css';

import i18n from '../i18n.jsx' ; // Import the i18n configuration
import { useTranslation } from 'react-i18next';


function Home() { 

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const images = [logo_Home_Jason_birth,logo_Home_Jason,logo_Home_Jason_250531
                  ,logo_Home_Jason_250607
                ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true); // State to control fade effect
  const [isImageLoaded, setIsImageLoaded] = useState(false); // State to track image load status

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fading out
      setTimeout(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length); // Change image
        
      if (isImageLoaded) { // Only change image if the current one is loaded
        setFade(false); // Start fading out
      }

      }, 1*1000); // Match this duration with the CSS transition duration
    }, 5*1000); // Change image every 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleImageLoad = () => {
    setIsImageLoaded(true); // Set image loaded state to true
    setFade(true); // Start fading in when the image is loaded
  };

  const handleFadeOutComplete = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length); // Change image
    setIsImageLoaded(false); // Reset image loaded state for the next image
  };



  return (
    <div style={{ "padding":"10px 20px" }} >
      <h3 style={{minHeight: '50px'}}> {t('hello')} </h3>
      <img src={images[currentImageIndex]} alt="Switching" 
        className={`logo_Home_Jason ${fade ? 'fade-in' : 'fade-out'}`} 
        onLoad={handleImageLoad} // Trigger when image is loaded
        onAnimationEnd={fade ? undefined : handleFadeOutComplete} 
        />
    </div>
  );
}

export default Home