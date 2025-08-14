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

    
    const loginTimestamp = sessionStorage.getItem('loginTimestamp');
    const loginDate = new Date(Number(loginTimestamp)); // Assuming loginTimestamp is a timestamp
    const loginTimestamp_date = loginDate.toString().replace("GMT+0800 (中國標準時間)", "");

    const currentTime = Date.now();
    const currentTime_date =  (Date(currentTime)).replace("GMT+0800 (中國標準時間)","");
    const elapsedTime = currentTime - parseInt(loginTimestamp, 10);

    const totalSeconds = Math.floor(elapsedTime / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;

    return (
        <div
          style={{"padding":"10px 20px"}}
        >
            <br/>
            <strong>Your IP Address: </strong> {ip}
            <br/><br/>
            <strong>backend api: </strong>
            <a href={API_BASE_URL} target="_blank"> {API_BASE_URL}</a>
            <br/><br/>
            <strong>Login time: </strong>
            {loginTimestamp_date}
            <br/><br/>
            <strong>Current time: </strong>
            {currentTime_date}
            <br/><br/>
            <strong>Elapsed Time:</strong> {minutes} min(s) {remainingSeconds} s
                      
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