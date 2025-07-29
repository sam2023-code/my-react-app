// src/MessageBoard.js
import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../config';
import '../css/messageboard.css'; // Import CSS for styling
import { useTranslation } from 'react-i18next';

const MessageBoard_grid = () => {

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
      <h3> {t('Navbar_messageboard_page_title')} </h3>
      <br />

      {sessionStorage.getItem('login_type')  !== "visitor" ?
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
      :
        <></>
      }

            <div className="message-board">
                {sortedMessages_desc.map(message => (
                    
                    <div className="message-box" key={message.id}>

                        <br />
                        <div className="message-timestamp">

                            <button onClick={() => handleDelete(message.id)}>
                                {t('Navbar_messageboard_page_rs_delete')}
                            </button>

                            &nbsp;&nbsp;{new Date(addEightHours(message.timestamp)).toLocaleString()}
                        </div>
                        <div className="message-content">
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            &bull; {message.content}
                        </div>
                    </div>
                ))}
            </div>



    </div>
  );
};

export default MessageBoard_grid;
