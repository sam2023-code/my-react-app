// src/MessageBoard.js
import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../config';
import '../css/messageboard.css'; // Import CSS for styling
import { useTranslation } from 'react-i18next';

const MessageBoard_grid = () => {

    const { t, i18n } = useTranslation();

  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [inputHeight, setInputHeight] = useState(70); // Initial height
  const [maxInputRow, setMaxInputRow] = useState(0); // Initial height

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

            // Add a new line
            setInputValue((prevText) => prevText + '\n');
            setInputHeight((prevHeight) => prevHeight + 20); // Increase height by 20px

            const lines = inputValue.split('\n')
            const lineCount = lines.length;
            setMaxInputRow(lineCount) 

        } else if (e.key === 'Backspace') {
            const lines = inputValue.split('\n')
            const lineCount = lines.length;
            if (lineCount !== maxInputRow) 
              { 
                  setMaxInputRow(lineCount) 
                  if(inputHeight > 70 && (lineCount+2) * 20 < inputHeight ){
                    setInputHeight((prevHeight) => prevHeight - 20)
                  }
                  //alert( lineCount   `${maxInputRow}` )
              }
        }

    };

    // State to track the ID of the crossed message
    const [crossedMessageId, setCrossedMessageId] = useState(null);

    // Function to toggle crossing out a message
    /*
    const handleToggleCross = (id) => {
        setCrossedMessageId(prevId => (prevId === id ? null : id));
    };
    */

    
    // Function to toggle crossing out a message and update the API
    const handleToggleCrossUpdate = async (id , isCrossed) => 
    {
        // Determine the new status based on current state
        const newStatus = isCrossed ? '---' : 'done';

        try {
            // Make an API call to update the message status
            const response = await fetch( API_BASE_URL + "/api/messages/" + id , {
                method: 'PUT', // or 'PATCH' depending on your API
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ taskfinish: newStatus }), // Update the column based on the new status
            });

            if (response.ok) {
                // If the API call is successful, toggle the crossed message ID
                //setCrossedMessageId(isCrossed ? null : id);

                // Fetch the updated messages after deletion
                fetchMessages();
            } else {
                console.error('Failed to update the message status');
            }
        } catch (error) {
            console.error('Error updating message status:', error);
        }
    };





  return (
    <div style={{ padding: '20px' }}>
      <h3> {t('Navbar_messageboard_page_title')} </h3>
      <br />

      {sessionStorage.getItem('login_type')  !== "visitor" ?

        <div style={{"display": "flex", "flexDirection": "column",maxWidth:"360px" }} >
        <form onSubmit={handleSubmit}>
          <textarea
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown} // Add the onKeyDown event handler
            placeholder= {t('Navbar_messageboard_page_form_message')} 
            style={{ width: '360px',height: `${inputHeight}px`, marginRight: '10px', resize: 'none',fontSize:'20px' 
                      ,padding:'5px 5px'
                  }}
            rows={4} // Adjust the number of visible rows
          />
          <br/>
          <button type="submit" style={{float: "right",fontSize : "16px"}}>{t('Navbar_messageboard_page_form_submit')}  </button>
        </form>
                <br/><br/>
        </div>
      :
        <></>
      }

            <div className="message-board">
                {sortedMessages_desc.map(message => (
                    
                    <div className="message-box" key={message.id}>

                        <div className="message-box-left">
                            <button onClick={() => handleDelete(message.id)}>
                                {t('Navbar_messageboard_page_rs_delete')}
                            </button>
                        </div>


                        <div className="message-box-right">
                            <div className="message-timestamp">
                                &nbsp;&nbsp;{new Date(message.timestamp).toISOString().split('T')[0]     }
                            </div>
                            <div className="message-content">
                                  <div className="message-space">
                                      &nbsp;&nbsp;
                                  </div>
                                    <div 
                                      className="message-content-text"
                                      onClick={() => handleToggleCrossUpdate(message.id, ( message.taskfinish === 'done'? true : false ))} 
                                      style={{ 
                                          //textDecoration: crossedMessageId === message.id ? 'line-through' : 'none',
                                          textDecoration: message.taskfinish === 'done' ? 'line-through' : 'none', 
                                          backgroundColor: message.taskfinish === 'done' ? 'lightslategray' : '#ced8ff', 
                                          cursor: 'pointer' // Change cursor to pointer for better UX
                                      }}
                                    >
                                      &bull; {message.content} 
                                  </div>
                                  
                            </div>
                        </div>

                    </div>
                ))}
            </div>



    </div>
  );
};

export default MessageBoard_grid;
