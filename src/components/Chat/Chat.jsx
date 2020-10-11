import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import { MicNone } from '@material-ui/icons';

import Message from '../Message';

import './styles.css';

const Chat = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = event => {
    event.preventDefault();
    setInput('');
  }

  

  return (
    <div className="chat">
      {/* Chat Header */}
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">Channel name</span>
        </h4>
        <strong>Details</strong>
      </div>

      {/* Chat Messages */}
      <div className="chat__messages">
        <Message />
        <Message />
        <Message />
      </div>

      {/* Chat Input */}
      <div className="chat__input">
        <form>
          <input type="text" placeholder="iMessage" value={input} onChange={e => setInput(e.target.value)} />
          <button onClick={sendMessage}>Send Message</button>
        </form>
        <IconButton>
          <MicNone className="chat__mic" />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;