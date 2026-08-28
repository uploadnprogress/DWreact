import React, { useState } from 'react';

const Chatbot = () => {
  const webhookUrl = "https://hook.us2.make.com/71zlo1hovhtyhcebw7t37terano9bhpf";

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: input, 
          source: 'chatbot',
          action: 'chat'
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Parse the JSON response
      const data = await response.json();
      
      console.log("Full response from Make:", data);

      // Extract the reply – handles both string and object responses
      let reply = "I received your message!";
      if (typeof data === 'string') {
        reply = data;
      } else if (data.response) {
        reply = data.response;
      } else if (data.text) {
        reply = data.text;
      } else if (data.Result) {
        reply = data.Result;
      } else if (data.result) {
        reply = data.result;
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);

    } catch (error) {
      console.error("Chat Error:", error);
      setMessages((prev) => [...prev, { 
        role: 'assistant', 
        content: "Sorry, I'm having trouble connecting right now. Please try again later." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>💬 DoneWright Services</h3>
            <button onClick={toggleChat} className="close-chat-btn">✕</button>
          </div>
          <div className="message-list">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.role === 'user' ? 'user-message' : 'bot-message'}`}
              >
                {msg.content}
              </div>
            ))}
            {isLoading && <div className="message bot-message" style={{ opacity: 0.6 }}>Typing...</div>}
          </div>
          <form onSubmit={sendMessage} className="chat-input-form">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading}>
              {isLoading ? '...' : 'Send'}
            </button>
          </form>
        </div>
      )}
      <button onClick={toggleChat} className="chat-widget-button">
        💬
      </button>
    </div>
  );
};

export default Chatbot;