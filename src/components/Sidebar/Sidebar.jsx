import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { RateReviewOutlined } from '@material-ui/icons';

import SidebarChat from '../SidebarChat';
import * as Actions from '../../actions/login';

import db from '../../firebase';
import './styles.css';

const Sidebar = ({ logout, user }) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    db.collection('chats').onSnapshot(snapshot => {
      setChats(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
    })
  }, [])

  const addChat = () => {
    const chatName = prompt('Enter a chat name');
    if (chatName) {
      db.collection('chats').add({ chatName })
    }
  }

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar className="sidebar__avatar" onClick={logout} src={user.photoURL} />
        <div className="sidebar__input">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
        <IconButton variant="outlined" className="sidebar__input-botton">
          <RateReviewOutlined onClick={addChat} />
        </IconButton>
      </div>
      <div className="sidebar__chats">
        {chats.map(({ id, data: { chatName } }) => <SidebarChat key={id} id={id} chatName={chatName} />)}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ user: state.login.user });

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
