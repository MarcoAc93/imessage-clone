import React from 'react';
import { Avatar } from '@material-ui/core';

import './styles.css';

const Message = ({ id, content }) => {
  return (
    <div className="message">
      <Avatar />
      <p>this is a messages</p>
      <small>timestamp</small>
    </div>
  );
};

export default Message;
