import React, { forwardRef } from 'react';
import { Avatar } from '@material-ui/core';
import * as timeago from 'timeago.js';

import './styles.css';

const Message = forwardRef(({ id, contents: { timestamp, displayName, email, message, photo, uid }, user }, ref) => {
  return (
    <div className={`message ${user.email === email ? 'message__sender' : ''}`} ref={ref}>
      <Avatar src={photo} className="message__photo" />
      <p>{message}</p>
      <small>{timeago.format(new Date(timestamp?.toDate()))}</small>
    </div>
  );
});

export default Message;
