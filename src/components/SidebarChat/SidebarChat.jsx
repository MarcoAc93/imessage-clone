import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as timeago from 'timeago.js';
import { Avatar } from '@material-ui/core';
import * as Actions from '../../actions/chat';
import db from '../../firebase';

import './styles.css';

const SidebarChat = ({ id, chatName, selectChat }) => {
  const [chatInfo, setChatInfo] = useState([]);

  useEffect(() => {
    db.collection('chats')
      .doc(id)
      .collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setChatInfo(snapshot.docs.map(doc => doc.data()));
      });
  }, [id])

  return (
    <div className="sidebar-chat" onClick={() => selectChat({ chatId: id, chatName })}>
      <Avatar src={chatInfo[0]?.photo} />
      <div className="sidebar-chat__info">
        <h3>{chatName}</h3>
        <p>{chatInfo[0]?.message}</p>
        <small>{timeago.format(new Date(chatInfo[0]?.timestamp?.toDate()))}</small>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(null, mapDispatchToProps)(SidebarChat);
