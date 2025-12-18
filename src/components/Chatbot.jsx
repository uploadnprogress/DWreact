import React, { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]); // { role: 'user' | 'assistant', content: string }
    const [userInput, setUserInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const chatboxRef = useRef(null);

    const MAX_HISTORY_LENGTH = 8;

    // Scroll to bottom whenever messages change
    useEffect(() => {
        if (chatboxRef.current) {
            chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
        if (!isOpen && messages.length === 0) {
            setMessages([{ role: 'assistant', content: 'Hi! I’m the DoneWright Assistant. How can I help you today?' }]);
        }
    };

    const handleSend = async () => {
        if (!userInput.trim()) return;

        const newUserMessage = { role: 'user', content: userInput };
        const updatedHistory = [...messages, newUserMessage];
        
        setMessages(updatedHistory);
        setUserInput('');
        setIsTyping(true);

        try {
            // Slicing history to match your previous MAX_HISTORY_LENGTH logic
            const historyToSend = updatedHistory.slice(-MAX_HISTORY_LENGTH);

            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: userInput,
                    history: historyToSend
                })
            });

            const data = await response.json();
            setIsTyping(false);

            if (response.ok) {
                setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
            } else {
                setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, connection error.' }]);
            }
        } catch (error) {
            setIsTyping(false);
            setMessages(prev => [...prev, { role: 'assistant', content: 'Oops! Network error.' }]);
        }
    };

    return (
        <>
            {/* Chat Toggle Button */}
            {!isOpen && (
                <button id="chat-open-button" onClick={toggleChat} className="chat-fab">
                    💬
                </button>
            )}

            {/* Chat Container */}
            {isOpen && (
                <div id="chat-container" className="chat-container">
                    <div className="chat-header">
                        <span>DoneWright Assistant</span>
                        <button onClick={toggleChat}>—</button>
                    </div>
                    <div id="chatbox" ref={chatboxRef} className="chatbox">
                        {messages.map((msg, i) => (
                            <div key={i} className={`message-bubble ${msg.role === 'assistant' ? 'bot-bubble' : 'user-bubble'}`}>
                                <span>{msg.content}</span>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="message-bubble bot-bubble">
                                <span>DoneWright Bot is typing...</span>
                            </div>
                        )}
                    </div>
                    <div className="chat-input-area">
                        <input 
                            type="text" 
                            value={userInput} 
                            onChange={(e) => setUserInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Type here..."
                        />
                        <button onClick={handleSend}>Send</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;