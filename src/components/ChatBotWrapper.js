import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { IoMdChatbubbles, IoMdClose } from 'react-icons/io';
import ChatBotHeader from './ChatBotHeader';
import './ChatBotWrapper.css';

const steps = [
  {
    id: '1',
    message: 'Welcome to PEAKXEL! How can we help you today?',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Thanks for reaching out! We will get back to you soon.',
    end: true,
  },
];

const ChatBotWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-wrapper">
      <button className="chatbot-toggle-button" onClick={toggleChatbot}>
        {isOpen ? <IoMdClose size={30} /> : <IoMdChatbubbles size={30} />}
      </button>
      {isOpen && (
        <div className="chatbot-container">
          <ChatBot
            steps={steps}
            className="chatbot"
            headerComponent={<ChatBotHeader toggleChatbot={toggleChatbot} />}
          />
        </div>
      )}
    </div>
  );
};

export default ChatBotWrapper;