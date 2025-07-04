
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

import './css/style.css'

import React , { useEffect,useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './navbar_pages/Home.jsx'
import User_list from './navbar_pages/User_list.jsx'
import About from './navbar_pages/About.jsx'
import Useful_link from './navbar_pages/Useful_link.jsx'
import UserCreate from './navbar_pages/UserCreate.jsx'
import UserForm from './components/Userform/UserForm.jsx'


import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom'; // If using React Router

function Hello_test() {
  return <h3> hello {location.protocol + "//" + location.host}</h3>
}

function App() {
  
  //refresh will reset
  //const current_theme = useState('light')
  
  const current_theme = localStorage.getItem('current_theme');
  //const [theme, setTheme] = useState(current_theme ? current_theme : 'light');
  const [theme, setTheme] = useState(
    localStorage.getItem('current_theme')
      ? localStorage.getItem('current_theme')
      : 'light'
  );

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
    case "/UserCreate":
      Component = <UserCreate />;
      break;
    case "/UserForm":
      Component = <UserForm />;
      break;
    default:
      Component = <NotFound />; // Optional: Handle unknown routes
      break;
  }
  

  return (
    <>
      <div className={`container ${theme}`}>

        <Router> {}
          <Navbar theme={theme} setTheme={setTheme}  />
          <div>
            <Routes> {}
              <Route path="/" element={<Home/>} />
              <Route path="/User_list" element={<User_list/>} />
              <Route path="/About" element={<About/>} />
              <Route path="/Useful_link" element={<Useful_link/>} />

              <Route path="/UserCreate" element={<UserCreate/>} />
              <Route path="/UserForm" element={<UserForm />} />
            </Routes>
          </div>
        </Router>
      {/*
        
              <link to="/" element={<Home/>} />
              <link to="/User_list" element={<User_list/>} />
              <link to="/About" element={<About/>} />
              <link to="/Useful_link" element={<Useful_link/>} />

      */
      }
      </div>

    </>
  );
}

export default App