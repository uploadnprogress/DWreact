import React, { useState, useRef, useEffect } from 'react';
import '../styles.css';

const Chatbot = () => {
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

  // THIS IS THE UPDATED FUNCTION WITHOUT SYNTAX ERRORS
  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    // Add user message to UI immediately
    setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);

    // EXACT Webhook URL from your JoinUsPage
    const webhookURL = "https://hook.us2.make.com/71zlo1hovhtyhcebw7t37terano9bhpf";

    try {
      const response = await fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // We add action: 'chat' so Make.com can tell the difference
        body: JSON.stringify({ 
            message: userMessage, 
            action: 'chat' 
        })
      });

      if (response.ok) {
        // Since we are sending raw text back from Make, we use .text()
        const botAnswer = await response.text();
        setMessages(prev => [...prev, { sender: 'bot', text: botAnswer }]);
      } else {
        setMessages(prev => [...prev, { sender: 'bot', text: "I'm having trouble connecting right now." }]);
      }
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { sender: 'bot', text: "Network error." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <button className={`chat-toggle-btn ${isOpen ? 'open' : ''}`} onClick={toggleChat}>
        {isOpen ? '✕' : '💬'}
      </button>

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

export default Chatbot;