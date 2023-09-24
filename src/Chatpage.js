import React, { useState } from 'react';
import { FaMicrophone, FaLanguage, FaCamera } from 'react-icons/fa';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [query, setQuery] = useState('');
  const [chats, setChats] = useState([]);  

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSendQuery = () => {
    // Send the query to the AI model 
  };

  const handleNewChat = () => {
    const newChatId = chats.length + 1;
    const newChat = {
      id: newChatId,
      messages: [], 
    };

    setChats([...chats, newChat]);
  };

  return (
    <div className="chat-page">
      {/* Sidebar */}
      <div className="sidebar">
        {/* Display past chats */}
        {chats.map((chat) => (
          <div key={chat.id}>Chat {chat.id}</div>
        ))}
        {/* New Chat button */}
        <button onClick={handleNewChat}>New Chat</button>
      </div>

      {/* Chat Interface */}
      <div className="chat-interface">
        {/* Display the chat history */}
        <div className="chat-history">
          {messages.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </div>

        {/* Input box for queries/prompts */}
        <input
          type="text"
          value={query}
          onChange={handleQueryChange}
          placeholder="Type your message..."
          className="input-box"
        />

        {/* Send button */}
        <button onClick={handleSendQuery} className="send-button">
          Send
        </button>

        {/* Additional functionality icons */}
        <div className="function-icons">
          <div className="icon">
            <FaMicrophone />
          </div>
          <div className="icon">
            <FaLanguage />
          </div>
          <div className="icon">
            <FaCamera />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
