import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { API_BASE_URL } from '../config';
import '../css/loginlog.css'; // Import CSS for styling

const LoginLogTable = () => {
    const [loginLogs, setLoginLogs] = useState([]);

    useEffect(() => {
        // Fetch top 10 login logs from the backend
        fetch(API_BASE_URL + "/api/login-logs/top10" )
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch login logs');
                }
                return response.json();
            })
            .then(data => setLoginLogs(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const formatDateTime = (timestamp) => {
        if (!timestamp) return "N/A"; // Handle null values
        return format(new Date(timestamp), 'dd-MM-yyyy HH:mm:ss'); // Custom format
    };

    // Sort the login logs by ID in descending order
    const sortedLoginLogs = [...loginLogs].sort((a, b) => b.id - a.id);

    return (
        <div>
            <h1>Login Logs</h1>
            <table border="1" className="table">
                <thead>
                    <tr>
                        <th>User Type</th>
                        <th>Username</th>
                        
                        <th>Login DateTime</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedLoginLogs.map(log => (
                        <tr key={log.id}>
                            
                            <td>{log.usertype}</td>
                            <td>{log.username}</td>
                            
                            <td>{log.loginDateTimeString}</td> 
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LoginLogTable;
