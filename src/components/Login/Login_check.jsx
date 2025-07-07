// abc_check.js
import { useState, useEffect } from 'react';

const Lohin_check = (onLoginCheck) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 檢查本地存儲中的 token
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
    if (onLoginCheck) {
      onLoginCheck(isLoggedIn); // 將結果傳遞給父組件
    }
  }, [isLoggedIn, onLoginCheck]);

  return isLoggedIn;
};

export default Lohin_check;
