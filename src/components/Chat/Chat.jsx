import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { IconButton } from '@material-ui/core';
import { MicNone } from '@material-ui/icons';
import firebase from 'firebase';
import db from '../../firebase';

import Message from '../Message';

import './styles.css';

const Chat = ({ chat, user }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (chat.chatId) {
      db.collection('chats').doc(chat.chatId)
        .collection('messages').orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => {
          setMessages(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        });
    }
  }, [chat.chatId]);

  const sendMessage = event => {
    event.preventDefault();
    db.collection('chats').doc(chat.chatId)
      .collection('messages').add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message: input,
        uid: user.uid,
        photo: user.photoURL,
        email: user.email,
        displayName: user.displayName,
      });
    setInput('');
  }

  return (
    <div className="chat">
      {/* Chat Header */}
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">{chat.chatName}</span>
        </h4>
        <strong>Details</strong>
      </div>

      {/* Chat Messages */}
      <div className="chat__messages">
        {messages.map(message => <Message key={message.id} contents={message.data} user={user} />)}
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

const mapStateToProps = state => ({ chat: state.chat, user: state.login.user });

export default connect(mapStateToProps)(Chat);