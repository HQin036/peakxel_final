import React from 'react';
import { IoMdClose } from 'react-icons/io';
import './ChatBotHeader.css';

const ChatBotHeader = ({ toggleChatbot }) => (
  <div className="chatbot-header">
    <span>Chat</span>
    <button className="chatbot-close-button" onClick={toggleChatbot}>
      <IoMdClose size={20} />
    </button>
  </div>
);

export default ChatBotHeader;