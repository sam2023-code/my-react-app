/*
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ListEmployee from './employee/ListEmployee'

const App = () => {
  return (
    <>
    <div className='container'>
       <Navbar />
    </div>

    <ListEmployee />
    </>
  );
};

export default App;
*/


/*
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/style.css'

import { useState } from 'react'
import ListEmployee from './employee/ListEmployee'

import { API_BASE_URL, DEBUG_MODE } from './config';


import Pricing from "./pages/Pricing";
//import About from "./pages/About.js";
import Home from "./pages/Home";
import Navbar from "./Navbar";



function Hello_test() {
  return <h3> hello</h3>
}

function App() {
  //const [count, setCount] = useState(0)

  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = <App />;
      break;
    case "/pricing":
      Component = <Pricing />;
      break;
    case "/about":
      Component = <About />;
      break;
    default:
      Component = <NotFound />; // Optional: Handle unknown routes
      break;
  }

  return (
    <>
      <Navbar />
      <ListEmployee />
    </>
  );
}

export default App
*/


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/style.css'

import { useEffect,useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import ListEmployee from './employee/ListEmployee'

import { API_BASE_URL, DEBUG_MODE } from './config';


function Hello_test() {
  return <h3> hello {location.protocol + "//" + location.host}</h3>
}

function App() {
  
  //refresh will reset
  //const [theme, setTheme] = useState('light')

  
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme])
  

  return (
    <>
      <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />

      <ListEmployee />
      </div>

    </>
  );
}

export default App