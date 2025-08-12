import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../config';

const api_url = API_BASE_URL

const App = () => {
    const [ip, setIp] = useState('');

    useEffect(() => {
        const fetchIp = async () => {
            try {
                const response = await fetch('https://api.ipify.org?format=json');
                const data = await response.json();
                setIp(data.ip);
            } catch (error) {
                console.error('Error fetching IP:', error);
            }
        };

        fetchIp();
    }, []);

    return (
        <div
          style={{"padding":"10px 20px"}}
        >
            <br/>
            <h3>Your IP Address: {ip}</h3>
            <br/>
            backend api: 
            <a href={API_BASE_URL} target="_blank"> {API_BASE_URL}</a>
        </div>
    );
};

export default App;

/*
import { API_BASE_URL } from '../config';

const api_url = API_BASE_URL

const config_setting = () => {
  return (
    <>
        <br />
        {API_BASE_URL}
    </>
  );
}

export default config_setting;
*/