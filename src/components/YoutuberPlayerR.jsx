import React, { useState, useEffect } from 'react';

const YouTubePlayerR = ({ videoId }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let iframeWidth;
  if (windowWidth <= 600) {
    iframeWidth = '95%';
  } else if (windowWidth <= 900) {
    iframeWidth = '500px';
  } else {
    iframeWidth = '600px';
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <iframe
        width={iframeWidth}
        height="400"
        src={`https://www.youtube.com/embed/${videoId}`} 
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubePlayerR;
