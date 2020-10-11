import React from 'react';
import { Avatar } from '@material-ui/core';

import './styles.css';

const Message = ({ id, contents: { timestamp, displayName, email, message, photo, uid }, user }) => {
  return (
    <div className={`message ${user.email === email ? 'message__sender' : ''}`}>
      <Avatar src={photo} className="message__photo" />
      <p>{message}</p>
      <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
    </div>
  );
};

export default Message;
