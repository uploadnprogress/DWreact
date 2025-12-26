import React, { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
  // --- CONFIGURATION ---
  const webhookUrl = "https://hook.us2.make.com/5wkom3twqpd7mx9vlcpdwhkfoxr84eho"; 
  // ---------------------

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Auto-scroll ref
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // 1. Add user message
    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // 2. Send to Webhook
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.text(); 
      
      // 3. Add AI response
      setMessages((prev) => [...prev, { role: 'assistant', content: data }]);

    } catch (error) {
      console.error("Chat Error:", error);
      setMessages((prev) => [...prev, { role: 'assistant', content: "Sorry, I'm having trouble connecting right now." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      
      {/* CHAT WINDOW (Conditionally rendered) */}
      {isOpen && (
        <div className="chat-window">
          {/* Header */}
          <div className="chat-header">
            <h3>DoneWright Assistant</h3>
            <button className="close-chat-btn" onClick={toggleChat}>×</button>
          </div>

          {/* Messages Area */}
          <div className="message-list">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`message ${msg.role === 'user' ? 'user-message' : 'bot-message'}`}
              >
                {msg.content}
              </div>
            ))}
            {isLoading && <div className="message bot-message">Typing...</div>}
            {/* Invisible element to scroll to */}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form className="chat-input-form" onSubmit={sendMessage}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button type="submit" disabled={isLoading}>
              Send
            </button>
          </form>
        </div>
      )}

      {/* FLOATING BUTTON */}
      <button className="chat-widget-button" onClick={toggleChat}>
        {isOpen ? '✕' : '💬'}
      </button>

    </div>
  );
};

export default Chatbot;