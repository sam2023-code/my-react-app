import './css/style.css'

import React , { useEffect,useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './navbar_pages/Home.jsx'
import User_list from './navbar_pages/User_list.jsx'
import About from './navbar_pages/About.jsx'
import Useful_link from './navbar_pages/Useful_link.jsx'
import UserCreate from './navbar_pages/UserCreate.jsx'
import UserForm from './components/Userform/UserForm.jsx'
import Diary from './navbar_pages/Diary.jsx'
import Vaccine from './navbar_pages/Vaccine.jsx'
import LoginLogTable from './navbar_pages/LoginLogTable.jsx'
import MessageBoard from './navbar_pages/MessageBoard_grid.jsx'
import Link_kindergarten from './navbar_pages/Link_kindergarten.jsx'
import Config_setting from './navbar_pages/Config_setting.jsx'
import NotFound from './navbar_pages/NotFound.jsx'
import SMS_Send from './navbar_pages/SMS_GRID.jsx'

import Login_check from './components/Login/Login_check.jsx';
import {Login_page , Dashboard} from './components/Login/Login_page.jsx';

import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom'; // If using React Router
import { useNavigate } from 'react-router-dom';

import i18n_lang from './i18n.jsx' ; // Import the i18n configuration
import { useTranslation } from 'react-i18next';



const SESSION_TIMEOUT = 60 * 60 * 1000; // 3 minutes in milliseconds

function App() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

   // 使用自定義的 login check hook
  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true'; // 检查登录状态
  const login_user_or_visitor = sessionStorage.getItem('login_type')  ;
  //console.log('當前登錄狀態:', isLoggedIn ? '已登錄.' : '未登錄.');

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
    case "/user_list" :
      Component = <User_list />;
      break;
    case "/about":
      Component = <About />;
      break;
    case "/useful_link":
      Component = <Useful_link />;
      break;
    case "/user_create":
      Component = <UserCreate />;
      break;
    case "/user_form":
      Component = <UserForm />;
      break;
    case "/login_page":
      Component = <Login_page />;
      break;

    case "/diary":
      Component = <Diary />;
      break;

    case "/vaccine":
      Component = <Vaccine />;
      break;

    case "/loginlog":
      Component = <LoginLogTable />;
      break;

    case "/messageboard":
      Component = <MessageBoard />;
      break;

    case "/link_kindergarten":
      Component = <Link_kindergarten />;
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
          {
            isLoggedIn ? ( 
            <>
              {/*<h2>歡迎回來！</h2>*/}
              <div>

                <SessionTimeoutHandler>
                <Routes> 
                  <Route path="/" element={<Home/>} />
                {
                  login_user_or_visitor == "user" ?
                    <Route path="/user_list" element={<User_list/>} />
                  :
                    <Route path="/user_list" element={<Login_page/>} />
                }
                  <Route path="/about" element={<About/>} />
                  <Route path="/Useful_link" element={<Useful_link/>} />

                  <Route path="/user_create" element={<UserCreate/>} />
                  <Route path="/user_form" element={<UserForm />} />

                  <Route path="/login_page" element={<Login_page />} />
                  <Route path="/dashboard" element={<Dashboard />} />

                  <Route path="/diary/" element={<Diary />} />
                  <Route path="/diary/:id" element={<Diary />} />
                  <Route path="/vaccine" element={<Vaccine />} />
                  <Route path="/link_kindergarten" element={<Link_kindergarten />} />

                  <Route path="/loginlog" element={<LoginLogTable />} />
                  <Route path="/messageboard" element={<MessageBoard />} />

                  <Route path="/config_setting" element={<Config_setting />} />
                  <Route path="/sms_board" element={<SMS_Send />} />

                  <Route path="*" element={<NotFound />} />
                </Routes>
                
                </SessionTimeoutHandler>
              </div>
          </>
        )
          : 
        ( 
          <>
                <Login_page />
          </>
            
        )
        }
        </Router>

        

      </div>

    </>
  );
}



const SessionTimeoutHandler = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginTimestamp = sessionStorage.getItem('loginTimestamp');
    const isLoggedInFromStorage = sessionStorage.getItem('isLoggedIn');

    if (isLoggedInFromStorage === 'true') {
      setIsLoggedIn(true);
    }

    const checkSessionTimeout = () => {
      if (isLoggedIn && loginTimestamp) {
        const currentTime = Date.now();
        const elapsedTime = currentTime - parseInt(loginTimestamp, 10);

        console.log(elapsedTime > SESSION_TIMEOUT);

        if (elapsedTime > SESSION_TIMEOUT) {
          alert('Session expired. Logging out...');
          handleLogout();
        }
      }
    };

    const interval = setInterval(checkSessionTimeout, 3000); // Check every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [isLoggedIn, navigate]);

  const handleLogout = () => {
    sessionStorage.clear(); // Clear session data
    setIsLoggedIn(false);
    navigate('/login_page'); // Redirect to login page
  };

  return children;
};


export default App

// 使用 createRoot 來渲染應用
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />);


/*

import './css/style.css'

import React , { useEffect,useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Login from './navbar_pages/LoginPage.jsx'
import Home from './navbar_pages/Home.jsx'
import User_list from './navbar_pages/User_list.jsx'
import About from './navbar_pages/About.jsx'
import Useful_link from './navbar_pages/Useful_link.jsx'
import UserCreate from './navbar_pages/UserCreate.jsx'
import UserForm from './components/Userform/UserForm.jsx'
import Login_check from './components/Login/Login_check.jsx';
import Login_page from './components/Login/Login_page.jsx';

import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom'; // If using React Router
import { useNavigate } from 'react-router-dom';

function Hello_test() {
  return <h3> hello {location.protocol + "//" + location.host}</h3>
}

function App() {

   // 使用自定義的 login check hook
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // 检查登录状态
  console.log('當前登錄狀態:', isLoggedIn ? '已登錄.' : '未登錄.');

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
    case "/login":
      Component = <Login />;
      break;
    case "/":
      Component = <Home />;
      break;
    case "/user_list":
      Component = <User_list />;
      break;
    case "/about":
      Component = <About />;
      break;
    case "/useful_link":
      Component = <Useful_link />;
      break;
    case "/user_create":
      Component = <UserCreate />;
      break;
    case "/user_form":
      Component = <UserForm />;
      break;
    case "/login_page":
      Component = <Login_page />;
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
          {
            isLoggedIn ? ( 
            <>
              {}
              <div>
                <Routes> {}
                  <Route path="/" element={<Home/>} />
                  <Route path="/user_list" element={<User_list/>} />
                  <Route path="/about" element={<About/>} />
                  <Route path="/Useful_link" element={<Useful_link/>} />

                  <Route path="/user_create" element={<UserCreate/>} />
                  <Route path="/user_form" element={<UserForm />} />

                  <Route path="/login_page" element={<Login_page />} />
                </Routes>
              </div>
          </>
        )
          : 
        ( 
          <>

                <h2 style={{alignItems:'center'}}>請登錄</h2>
                <Login_page />

          </>
            
        )
        }
        </Router>

        

      </div>

    </>
  );
}

export default App

// 使用 createRoot 來渲染應用
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />);
*/