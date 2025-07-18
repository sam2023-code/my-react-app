import React, { useState, useEffect } from 'react';
import SubDropdownMenu from './SubDropdownMenu.jsx';
import SubNormalMenu from './SubNormalMenu.jsx';


const ResponsiveComponent = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {screenWidth > 900 ? (
        <div>
              {sessionStorage.getItem('isLoggedIn') === 'true' ? <SubNormalMenu /> : <></> }
        </div>
      ) : (
        <div>
              {sessionStorage.getItem('isLoggedIn') === 'true' ? <SubDropdownMenu /> : <></> }
        </div>
      )}
    </div>
  );
};

export default ResponsiveComponent;
