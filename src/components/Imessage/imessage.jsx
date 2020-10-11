/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Sidebar from '../Sidebar';
import Login from '../Login';
import Chat from '../Chat';
import * as Actions from '../../actions/login';
import { auth } from '../../firebase';

import './styles.css';

const iMessage = (props) => {
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        const { login } = props;
        login(authUser);
      } else {
        const { logout } = props;
        logout();
      }
    })
  }, []);

  const { user } = props;
  return (
    <div className="imessage">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : <Login /> }
    </div>
  );
};

const mapStateToProps = state => ({ user: state.login.user });

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(iMessage);
