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
   /*
  const [loginStatus, setLoginStatus] = useState(false);

  const handleLoginCheck = (status) => {
    setLoginStatus(status);
    console.log('當前登錄狀態:', status ? '已登錄' : '未登錄');
  };
  const isLoggedIn = Login_check(handleLoginCheck);
  */
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
              {/*<h2>歡迎回來！</h2>*/}
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
                {/*  
                    <h2 style={{alignItems:'center'}}>請登錄</h2>
                    <button onClick={() => {
                    localStorage.setItem('token', 'your_token_here');
                    handleLoginCheck(true);
                    }}>登錄</button>
                */ }
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