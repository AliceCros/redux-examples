import React, { Component } from 'react';
import { store } from './store';
import { setIncrease, setDecrease } from './actions';

class TimeCounterContainer extends Component {

  setTimeCounter = (e) => {
    const type = e.target.value;
    const sessionType = store.getState().activeSession;
    
    const activeSession = store.getState()[sessionType];
    console.log(type, sessionType, activeSession)
    // console.log(activeSession)
    if (type === 'INCREASE') {
      store.dispatch(setIncrease(activeSession))
    }

    if (type === 'DECREASE' ) {
      store.dispatch(setDecrease(activeSession))
    }
    
  }

  render() {
    return (
      <div>
        <div>
          <p>Active session: { store.getState().activeSession }</p>
          <p><strong>{ store.getState().days }  :   { store.getState().hours }  :   { store.getState().minutes }  :   { store.getState().seconds }</strong></p>
          <p><small>days    hours    minutes    seconds</small></p>
        </div>
        <div>
          <button onClick={this.setTimeCounter} value='INCREASE'>Increase</button>
          <button onClick={this.setTimeCounter} value='DECREASE'>Decrease</button>
        </div>
      </div>
    );
  }
}

export default TimeCounterContainer;