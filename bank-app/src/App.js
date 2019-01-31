import React, { Component } from 'react';

import BankAccountPreview from './BankAccountPreview';
import BankAccountActions from './BankAccountActions';
import { store } from './store';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BankAccountPreview 
          name={store.getState().name} 
          balance={store.getState().balance}
        />
        <BankAccountActions 
          actionList={[{ label:'WITHDRAW_10000', amount:'10000', type: 'WITHDRAW'}, { label:'WITHDRAW_5000', amount:'5000', type: 'WITHDRAW'}, { label:'GIVE_ALL_TO_CHARITY', amount:store.getState().balance, type: 'WITHDRAW'}]}
        />
      </div>
    );
  }
}

export default App;
