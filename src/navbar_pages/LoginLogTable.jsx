import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

const LoginLogTable = () => {
    const [loginLogs, setLoginLogs] = useState([]);

    useEffect(() => {
        // Fetch top 10 login logs from the backend
        fetch('http://localhost:8080/api/login-logs/top10')
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

    return (
        <div>
            <h1>Top 10 Login Logs</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>User Type</th>
                        <th>Login DateTime</th>
                    </tr>
                </thead>
                <tbody>
                    {loginLogs.map(log => (
                        <tr key={log.id}>
                            <td>{log.id}</td>
                            <td>{log.username}</td>
                            <td>{log.usertype}</td>
                            <td>{log.loginDateTimeString}</td> {/* Format timestamp */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LoginLogTable;
