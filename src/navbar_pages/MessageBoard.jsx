// src/MessageBoard.js
import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../config';
import '../css/messageboard.css'; // Import CSS for styling
import { useTranslation } from 'react-i18next';

const MessageBoard = () => {

    const { t, i18n } = useTranslation();

  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

    // Function to fetch messages from the API
    const fetchMessages = async () => {
        try {
            const response = await fetch(API_BASE_URL + "/api/messages");
            const data = await response.json();
            setMessages(data);
        } catch (error) {
            console.error("Error fetching messages:", error);
        }
    };

  // Fetch messages from the Spring API when the component mounts
  useEffect(() => {
        fetchMessages();
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      // Send the message to the Spring API
      const response = await fetch(API_BASE_URL + "/api/messages", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: inputValue }),
      });

      if (response.ok) {
        const newMessage = await response.json();
        // Update the messages state
        //setMessages([...messages, newMessage]);
        setInputValue(''); // Clear the input field

        // Fetch the updated messages
        fetchMessages();
      }
    }
  };

      // Function to delete a message
    const handleDelete = async (id) => {
        try {
            // Send a DELETE request to the API
            await fetch(API_BASE_URL + "/api/messages/" + id , {
                method: 'DELETE',
            });

            // Fetch the updated messages after deletion
            fetchMessages();
        } catch (error) {
            console.error("Error deleting message:", error);
        }
    };

    // Sort messages by ID in descending order
    const sortedMessages_desc = [...messages].sort((a, b) => b.id - a.id);


    // Function to handle Enter key press
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent form submission on Enter key
        }
    };

        // Function to add 8 hours to the timestamp
    const addEightHours = (timestamp) => {
        const date = new Date(timestamp); // Convert timestamp to Date object
        date.setHours(date.getHours() + 8); // Add 8 hours
        return date.toLocaleString(); // Format the date
    };

  return (
    <div style={{ padding: '20px' }}>
      <h1> {t('Navbar_messageboard_page_title')} </h1>
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown} // Add the onKeyDown event handler
          placeholder= {t('Navbar_messageboard_page_form_message')} 
          style={{ width: '300px',height: '60px', marginRight: '10px' }}
          rows={4} // Adjust the number of visible rows
        />
        <button type="submit">{t('Navbar_messageboard_page_form_submit')}  </button>
      </form>

        <div>
            <br />
            <h1></h1>
            <table>
                <thead>
                    <tr>
                        <th>{t('Navbar_messageboard_page_rs_id')} </th>
                        <th>{t('Navbar_messageboard_page_rs_datetime')} </th>
                        <th>{t('Navbar_messageboard_page_rs_content')} </th>
                    </tr>
                </thead>
                <tbody>
                    {sortedMessages_desc.map(sortedMessages_desc => (
                        <tr key={sortedMessages_desc.id}> 
                            <td>
                                    <button onClick={() => handleDelete(sortedMessages_desc.id)}>
                                        {t('Navbar_messageboard_page_rs_delete')} 
                                    </button>

                                    {sortedMessages_desc.id} 
                            </td>
                            <td>{new Date(addEightHours(sortedMessages_desc.timestamp)).toLocaleString()}</td>
                            <td>{sortedMessages_desc.content}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>



    </div>
  );
};

export default MessageBoard;
