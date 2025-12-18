import React, { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    
    const chatboxRef = useRef(null);
    const containerRef = useRef(null);

    const MAX_HISTORY_LENGTH = 8;

    // Minimize chat if clicking outside - aligns with your request
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    // Auto-scroll to keep the latest message in view
    useEffect(() => {
        if (chatboxRef.current) {
            chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!userInput.trim()) return;
        const newUserMessage = { role: 'user', content: userInput };
        const updatedHistory = [...messages, newUserMessage];
        setMessages(updatedHistory);
        setUserInput('');
        setIsTyping(true);

        try {
            const historyToSend = updatedHistory.slice(-MAX_HISTORY_LENGTH);
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userInput, history: historyToSend })
            });
            const data = await response.json();
            setIsTyping(false);
            if (response.ok) {
                setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
            }
        } catch (error) {
            setIsTyping(false);
            setMessages(prev => [...prev, { role: 'assistant', content: 'Network error.' }]);
        }
    };

    return (
        <div ref={containerRef}>
            {/* The Trigger: Using your styles.css logic for buttons */}
            {!isOpen && (
                <button 
                    className="btn" 
                    onClick={() => setIsOpen(true)}
                    style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1002, borderRadius: '50%', width: '60px', height: '60px' }}
                >
                    💬
                </button>
            )}

            {/* The Window: Using .popup-container and .chatbox from your styles.css */}
            {isOpen && (
                <div className="popup-overlay show">
                    <div className="popup-container" style={{ position: 'fixed', bottom: '20px', right: '20px', margin: 0 }}>
                        <button className="close-btn" onClick={() => setIsOpen(false)}>&times;</button>
                        <h2>DoneWright Assistant</h2>
                        
                        <div className="chatbox" ref={chatboxRef} style={{ height: '300px', overflowY: 'auto', marginBottom: '15px', padding: '10px', border: '1px solid #ddd' }}>
                            {messages.length === 0 && <div className="message-bubble bot-bubble"><span>Hi! How can I help you today?</span></div>}
                            {messages.map((msg, i) => (
                                <div key={i} className={`message-bubble ${msg.role === 'assistant' ? 'bot-bubble' : 'user-bubble'}`} style={{ marginBottom: '10px' }}>
                                    <span>{msg.content}</span>
                                </div>
                            ))}
                            {isTyping && <div className="message-bubble bot-bubble"><span>Typing...</span></div>}
                        </div>

                        <div className="form-group" style={{ display: 'flex', gap: '5px' }}>
                            <input 
                                type="text" 
                                value={userInput} 
                                onChange={(e) => setUserInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Type a message..."
                            />
                            <button className="btn" onClick={handleSend} style={{ marginTop: 0, padding: '5px 15px' }}>Send</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;