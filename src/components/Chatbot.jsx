import React, { useState } from 'react';

const Chatbot = () => {
  // --- CONFIGURATION ---
  // Your working Make Webhook URL
  const webhookUrl = "https://hook.us2.make.com/5wkom3twqpd7mx9vlcpdwhkfoxr84eho"; 
  // ---------------------

  const [isOpen, setIsOpen] = useState(false); // Controls if chat window is visible
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // 1. Add user message to UI immediately
    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // 2. Send to Make Webhook
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.text(); 
      
      // 3. Add AI response to UI
      setMessages((prev) => [...prev, { role: 'assistant', content: data }]);

    } catch (error) {
      console.error("Chat Error:", error);
      setMessages((prev) => [...prev, { role: 'assistant', content: "Sorry, I'm having trouble connecting right now." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* 1. FLOATING BUTTON (Always Visible) */}
      <button 
        onClick={toggleChat}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          cursor: 'pointer',
          zIndex: 9999,
          fontSize: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* 2. CHAT WINDOW (Only visible when isOpen is true) */}
      {isOpen && (
        <div className="chat-window" style={{
          position: 'fixed',
          bottom: '90px',
          right: '20px',
          width: '350px',
          height: '500px',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          border: '1px solid #ddd'
        }}>
          {/* Header */}
          <div style={{ padding: '15px', background: '#007BFF', color: 'white', fontWeight: 'bold' }}>
            DoneWright Assistant
          </div>

          {/* Messages Area */}
          <div style={{ flex: 1, padding: '15px', overflowY: 'auto', background: '#f9f9f9' }}>
            {messages.map((msg, index) => (
              <div key={index} style={{ 
                marginBottom: '10px', 
                textAlign: msg.role === 'user' ? 'right' : 'left' 
              }}>
                <span style={{ 
                  display: 'inline-block',
                  padding: '8px 12px', 
                  borderRadius: '15px',
                  background: msg.role === 'user' ? '#007BFF' : '#E9ECEF',
                  color: msg.role === 'user' ? '#fff' : '#333',
                  maxWidth: '80%',
                  wordWrap: 'break-word'
                }}>
                  {msg.content}
                </span>
              </div>
            ))}
            {isLoading && <div style={{ textAlign: 'left', color: '#888', fontStyle: 'italic' }}>Typing...</div>}
          </div>

          {/* Input Area */}
          <form onSubmit={sendMessage} style={{ display: 'flex', borderTop: '1px solid #ddd' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              style={{ flex: 1, padding: '15px', border: 'none', outline: 'none' }}
            />
            <button 
              type="submit" 
              disabled={isLoading}
              style={{ 
                padding: '0 20px', 
                background: '#007BFF', 
                color: 'white', 
                border: 'none', 
                cursor: 'pointer',
                fontWeight: 'bold' 
              }}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;