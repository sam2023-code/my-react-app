// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/diary_navbar.css'; // Import CSS for styling


const Diary_navbar = () => {
  
  return (
    <div className="diary-navbar">
      <h2></h2>
      <ul>
        <li><NavLink to="/diary/item_bicycle" style={({ isActive }) => (isActive? styles.actLink: styles.link)} >第一次踏單車</NavLink></li>
        <li><NavLink to="/diary/item_juice" style={({ isActive }) => (isActive? styles.actLink: styles.link)} >自己飲果汁</NavLink></li>
        <li><NavLink to="/diary/item_ferry" style={({ isActive }) => (isActive? styles.actLink: styles.link)} >第一次坐船</NavLink></li>
        <li><NavLink to="/diary/item_jumpin" style={({ isActive }) => (isActive? styles.actLink: styles.link)} >第一次波波池</NavLink></li>
      </ul>
    </div>
  );
};

export default Diary_navbar;

const styles = {

  link: {
    backgroundColor: 'white'
  },
  actLink: {
    backgroundColor: 'lightblue', // Change this color as needed
  },
};
