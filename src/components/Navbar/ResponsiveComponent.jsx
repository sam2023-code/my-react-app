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
      {screenWidth > 700 ? (
        <div>
              <SubNormalMenu />
        </div>
      ) : (
        <div>
              <SubDropdownMenu />
        </div>
      )}
    </div>
  );
};

export default ResponsiveComponent;
