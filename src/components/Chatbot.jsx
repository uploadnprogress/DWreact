import React, { useState } from 'react';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! How can I help you with your project today?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const newUserMessage = { id: Date.now(), text: inputValue, sender: 'user' };
    const botReply = { id: Date.now() + 1, text: "Thanks for your message! A specialist will review this and get back to you shortly.", sender: 'bot' };
    
    setMessages(prev => [...prev, newUserMessage, botReply]);
    setInputValue('');
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>DoneWright Assistant</h3>
            <button onClick={toggleChat} className="close-chat-btn">&times;</button>
          </div>
          <div className="message-list">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}>
                {message.text}
              </div>
            ))}
          </div>
          <form className="chat-input-form" onSubmit={handleSendMessage}>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type your message..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
      <button onClick={toggleChat} className="chat-widget-button" aria-label="Open chat">
        💬
      </button>
    </div>
  );
}

export default Chatbot;