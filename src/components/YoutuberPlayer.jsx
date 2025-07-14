// src/YouTubePlayer.js
import React from 'react';

const YouTubePlayer = ({ videoId }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2></h2>
      <iframe
        width="560" // Set the width of the video
        height="315" // Set the height of the video
        src={`https://www.youtube.com/embed/${videoId}`} // Embed URL
        title="YouTube video player"
        frameBorder="0" // Remove border
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" // Permissions
        allowFullScreen // Allow fullscreen mode
      ></iframe>
    </div>
  );
};

export default YouTubePlayer;
