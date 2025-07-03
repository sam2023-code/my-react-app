
/*
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/style.css'

import { useEffect,useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import ListEmployee from './employee/ListEmployee'
import Home from './navbar_pages/Home.jsx'
import User_list from './navbar_pages/User_list.jsx'
import About from './navbar_pages/About.jsx'
import Useful_link from './navbar_pages/Useful_link.jsx'


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

  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = <Home />;
      break;
    case "/User_list":
      Component = <User_list />;
      break;
    case "/about":
      Component = <About />;
      break;
    case "/Useful_link":
      Component = <Useful_link />;
      break;
    default:
      Component = <NotFound />; // Optional: Handle unknown routes
      break;
  }
  

  return (
    <>
      <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      {Component}
      </div>

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
import Home from './navbar_pages/Home.jsx'
import User_list from './navbar_pages/User_list.jsx'
import About from './navbar_pages/About.jsx'
import Useful_link from './navbar_pages/Useful_link.jsx'
import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom'; // If using React Router

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

  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = <Home />;
      break;
    case "/User_list":
      Component = <User_list />;
      break;
    case "/about":
      Component = <About />;
      break;
    case "/Useful_link":
      Component = <Useful_link />;
      break;
    default:
      Component = <NotFound />; // Optional: Handle unknown routes
      break;
  }
  

  return (
    <>
      <div className={`container ${theme}`}>

        

        <Router> {/* Wrap with Router if using React Router */}
          <Navbar />
          <div>
            <Routes> {/* Define routes for your pages */}
              <Route path="/" element={<Home/>} />
              <Route path="/User_list" element={<User_list/>} />
              <Route path="/About" element={<About/>} />
              <Route path="/Useful_link" element={<Useful_link/>} />
            </Routes>
          </div>
        </Router>

      </div>

    </>
  );
}

export default App