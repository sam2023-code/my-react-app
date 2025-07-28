// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/diary_navbar.css'; // Import CSS for styling

const Diary_navbar = () => {
  return (
    <div className="diary-navbar">
      <h2></h2>
      <ul>
        <li><Link to="/diary/item_bicycle">第一次踏單車</Link></li>
        <li><Link to="/diary/item_juice">自己飲果汁</Link></li>
        <li><Link to="/diary/item_ferry">第一次坐船</Link></li>
        <li><Link to="/diary/item_jumpin">第一次波波池</Link></li>
      </ul>
    </div>
  );
};

export default Diary_navbar;
