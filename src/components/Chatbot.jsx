import React, { useState, useRef, useEffect } from 'react';
import '../styles.css'; // We will add styles next

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! I am the DoneWright Assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);

    // REPLACE THIS WITH YOUR NEW MAKE WEBHOOK URL
    const webhookURL = "YOUR_NEW_MAKE_WEBHOOK_URL_HERE";

    try {
      const response = await fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage })
      });

      if (response.ok) {
        const botAnswer = await response.text();
        setMessages(prev => [...prev, { sender: 'bot', text: botAnswer }]);
      } else {
        setMessages(prev => [...prev, { sender: 'bot', text: "I'm having trouble connecting right now. Please email us!" }]);
      }
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { sender: 'bot', text: "Network error. Please try again." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button className={`chat-toggle-btn ${isOpen ? 'open' : ''}`} onClick={toggleChat}>
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>DoneWright Assistant</h3>
          </div>
          
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                <div className="message-bubble">{msg.text}</div>
              </div>
            ))}
            {isTyping && <div className="message bot"><div className="message-bubble typing">...</div></div>}
            <div ref={messagesEndRef} />
          </div>

          <form className="chat-input-area" onSubmit={handleSend}>
            <input 
              type="text" 
              placeholder="Ask a question..." 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
            />
            <button type="submit">➤</button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;