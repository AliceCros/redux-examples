import React from 'react';

import { store } from './store';
import { setWithdraw } from './actions'

const BankAccountAction = ({ action }) => {
  
  const dispatchBankAccountAction = (e) => {
    console.log(e.target.dataset)
    const amount = e.target.dataset.amount;
    store.dispatch(setWithdraw(amount));
  }

  return (
    <div>
      <button 
        data-label={action.label}
        data-amount={action.amount}
        onClick={dispatchBankAccountAction}
      >
      {action.type} ${action.amount}
      </button>
    </div>
  );
};

export default BankAccountAction;