import React, { Component } from 'react';

import TimeCounterContainer from './TimeCounterContainer';
import { store } from './store';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h5>BOOK NAME</h5>
        <h2>Understanding Redux - 1</h2>
        <TimeCounterContainer counter={[store.getState().days, store.getState().hours, store.getState().minutes, store.getState().seconds]} />
      </div>
    );
  }
}

export default App;
