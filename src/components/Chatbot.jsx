import React, { useState, useEffect, useRef } from 'react';

const Chat = () => {
  // --- CONFIGURATION ---
  // PASTE YOUR NEW MAKE WEBHOOK URL HERE (The one connected to Anthropic)
  const webhookUrl = "https://hook.us2.make.com/5wkom3twqpd7mx9vlcpdwhkfoxr84eho"; 
  // ---------------------

  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }), // Sending as JSON
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // 3. Get the answer text from Make
      const data = await response.text(); 
      
      // 4. Add AI response to UI
      setMessages((prev) => [...prev, { role: 'assistant', content: data }]);

    } catch (error) {
      console.error("Chat Error:", error);
      setMessages((prev) => [...prev, { role: 'assistant', content: "Sorry, I'm having trouble connecting right now." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-container" style={{ maxWidth: '400px', margin: '20px auto', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
      <div className="chat-history" style={{ height: '300px', overflowY: 'auto', padding: '15px', background: '#f9f9f9' }}>
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
              color: msg.role === 'user' ? '#fff' : '#333'
            }}>
              {msg.content}
            </span>
          </div>
        ))}
        {isLoading && <div style={{ textAlign: 'left', color: '#888' }}>Typing...</div>}
      </div>

      <form onSubmit={sendMessage} style={{ display: 'flex', borderTop: '1px solid #ddd' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={{ flex: 1, padding: '10px', border: 'none', outline: 'none' }}
        />
        <button 
          type="submit" 
          disabled={isLoading}
          style={{ padding: '10px 20px', background: '#007BFF', color: '#fff', border: 'none', cursor: 'pointer' }}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;