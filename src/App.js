import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';
import Imessage from './components/Imessage';
import './App.css';
import 'fontsource-roboto';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Imessage />
      </div>
    </Provider>
  );
}

export default App;
