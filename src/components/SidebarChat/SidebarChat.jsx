import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/chat';
import { Avatar } from '@material-ui/core';

import './styles.css';

const SidebarChat = ({ id, chatName, selectChat }) => {
  return (
    <div className="sidebar-chat" onClick={() => selectChat({ chatId: id, chatName })}>
      <Avatar />
      <div className="sidebar-chat__info">
        <h3>{chatName}</h3>
        <p>last message sent</p>
        <small>timestamp</small>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(null, mapDispatchToProps)(SidebarChat);
