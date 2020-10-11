import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import login from '../reducers/login';
import chat from '../reducers/chat';

const reducers = combineReducers({
  login,
  chat,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export const store = configureStore();