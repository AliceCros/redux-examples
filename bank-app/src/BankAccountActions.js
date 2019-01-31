import React, { Component } from 'react';

import BankAccountAction from './BankAccountAction';

class BankAccountActions extends Component {
  
  render() {
    return (
      <div>
        {
          this.props.actionList.map((action, i) => <BankAccountAction key={`${action.label}-${i}`} action={action} /> )
        }
      </div>
    );
  }
}

export default BankAccountActions;