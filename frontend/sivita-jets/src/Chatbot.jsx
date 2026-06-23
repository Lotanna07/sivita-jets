// src/Chatbot.jsx
import React, { useState } from 'react';
import { FaTimes, FaPaperPlane } from 'react-icons/fa';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Welcome to Sivita Jets! ✈️ How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      const botReply = { sender: 'bot', text: 'Thank you for your message. Our team will get back to you shortly.' };
      setMessages(prev => [...prev, botReply]);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center justify-center w-20 h-20"
        >
          <img 
            src="logo.png" 
            alt="Sivita Jets" 
            className="w-12 h-12 object-contain"
          />
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl w-96 h-[28rem] flex flex-col overflow-hidden border border-gray-200">
          {/* Header with logo */}
          <div className="bg-blue-600 text-white px-5 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img 
                src="logo.png" 
                alt="Sivita Jets" 
                className="w-7 h-7 object-contain bg-white rounded-full p-1"
              />
              <span className="font-semibold text-lg">Sivita Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200 text-xl">
              <FaTimes />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-2 rounded-lg text-base ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t p-3 flex gap-2 bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type your message..."
              className="flex-1 border rounded-full px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button onClick={sendMessage} className="bg-blue-600 text-white rounded-full p-2 px-3 hover:bg-blue-700">
              <FaPaperPlane size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;