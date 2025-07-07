import React, { useState } from 'react';
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
      window.location.reload();
      //navigate('/'); // 重定向到首頁
    } else {
      const error = await response.text();
      setMessage(error); // 登入失敗
    }
  };

  return (
    <div>
      <h2>登入</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>用戶名：</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>密碼：</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">登入</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginPage;
/*
import React, { useState } from 'react';

const Login_page = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8080/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.text();
      setMessage(data); // 登入成功
    } else {
      const error = await response.text();
      setMessage(error); // 登入失敗
    }
  };

  return (
    <div>
      <h2>登入</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>用戶名：</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>密碼：</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">登入</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login_page;
*/