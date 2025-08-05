// src/MessageBoard.js
import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../config';
import '../css/messageboard.css'; // Import CSS for styling
import { useTranslation } from 'react-i18next';

const SMS_GRID = () => {

    const { t, i18n } = useTranslation();

  const [messages, setMessages] = useState([]);
  const [sms_token, setSmsTokenValue] = useState('');
  const [sms_phone, setSmsPhoneValue] = useState('');
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


  const handleTokenChange = (event) => {
    setSmsTokenValue(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setSmsPhoneValue(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      // Send the message to the Spring API
      const response = await fetch(API_BASE_URL + "/api/sms_sendout", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          { 
            json_token: sms_token ,
            json_phone: sms_phone ,
            json_content: inputValue 
          }
        ),
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

    // Function to handle Enter key press
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent form submission on Enter key
        }
    };

    // State to track the ID of the crossed message
    const [crossedMessageId, setCrossedMessageId] = useState(null);


  return (
    <div style={{ padding: '20px' }}>
      <h3> SMS </h3>
      <br />

      {sessionStorage.getItem('login_type')  !== "visitor" ?
        <form onSubmit={handleSubmit}>

          <textarea
            type="text"
            value={sms_token}
            onChange={handleTokenChange}
            placeholder= {"token"} 
            onKeyDown={handleKeyDown} // Add the onKeyDown event handler
            style={{ width: '100px',height: '30px', marginRight: '10px' }}
            rows={1} // Adjust the number of visible rows
          />

          <br/>

          <textarea
            type="text"
            value={sms_phone}
            onChange={handlePhoneChange}
            placeholder= {"phone"} 
            onKeyDown={handleKeyDown} // Add the onKeyDown event handler
            style={{ width: '150px',height: '30px', marginRight: '10px' }}
            rows={1} // Adjust the number of visible rows
          />
          <br/>

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

    </div>
  );
};

export default SMS_GRID;
