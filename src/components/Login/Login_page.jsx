import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL, DEBUG_MODE } from '../../config';

import i18n_lang from '../../i18n.jsx' ; // Import the i18n configuration
import { useTranslation } from 'react-i18next';

const Login_page = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
    
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // 使用 useNavigate 鉤子

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch( API_BASE_URL + "/api/auth/login" 
    ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.text();
      setMessage(data); // 登入成功
      //localStorage.setItem('isLoggedIn', 'true'); // 将登录状态设置为 true


      const loginTimestamp = Date.now();
      sessionStorage.setItem('loginTimestamp', loginTimestamp);
      sessionStorage.setItem('isLoggedIn', true);
      sessionStorage.setItem('login_type', "user");

      navigate('/'); // 重定向到首頁
      window.location.reload();
      
    } else {
      const error = await response.text();
      setMessage(error); // 登入失敗
    }
  };

  const vistor_login = () => {
  
      const loginTimestamp = Date.now();
      sessionStorage.setItem('loginTimestamp', loginTimestamp);
      sessionStorage.setItem('isLoggedIn', true);
      sessionStorage.setItem('login_type', "visitor");

      navigate('/'); // 重定向到首頁
      window.location.reload();
  };



  return (
    <div className='login'>
      <div className='login-title'> <h2>{t('Login_page_title')}</h2> </div>
      <form className='login-container' onSubmit={handleLogin}>
        <div className='login-text'>
          <label>{t('Login_page_username')}</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className='login-text'>
          <label>{t('Login_page_password')}</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <br/>
        <br/>

        <button className='login-button' type="submit"> {t('Login_page_login_button')} </button>

      </form>
      
      <br/>
      {message && <p>{message}</p>}

        <br/>
        <button onClick={vistor_login} className='login-visitor'> {t('Login_page_login_visitor')} </button>


    </div>
  );
};

const Dashboard = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const checkSessionTimeout = () => {

      const SESSION_TIMEOUT = 3 * 60 * 1000; // 3 minutes in milliseconds

      const loginTimestamp = sessionStorage.getItem('loginTimestamp');
      const isLoggedIn = sessionStorage.getItem('isLoggedIn');



      if (isLoggedIn && loginTimestamp) {
        const currentTime = Date.now();
        const elapsedTime = currentTime - parseInt(loginTimestamp, 10);

        console.log(elapsedTime - SESSION_TIMEOUT)

        if (elapsedTime > SESSION_TIMEOUT) {
          alert('Session expired. Redirecting to login page...');
          sessionStorage.clear(); // Clear session data
          navigate('/login'); // Redirect to login page
        }
      }
    };

    const interval = setInterval(checkSessionTimeout, 3000); // Check every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [navigate]);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your session!</p>
    </div>
  );
};

//export default Login_page;
export {Login_page,Dashboard };

/*
import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL, DEBUG_MODE } from '../../config';

const LoginPage = () => {
    
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // 使用 useNavigate 鉤子

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch( API_BASE_URL + "/api/auth/login" 
    ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.text();
      setMessage(data); // 登入成功
      localStorage.setItem('isLoggedIn', 'true'); // 将登录状态设置为 true
      navigate('/'); // 重定向到首頁
      window.location.reload();
      
    } else {
      const error = await response.text();
      setMessage(error); // 登入失敗
    }
  };

  return (
    <div className='login'>
      <div> <h2>Login</h2> </div>
      <form className='login-container' onSubmit={handleLogin}>
        <div>
          <label>User Name：</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password：</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className='login-button' type="submit"> Login </button>
      </form>
      
      <br/>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginPage;
*/