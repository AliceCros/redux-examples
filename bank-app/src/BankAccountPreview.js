import React from 'react';

const BankAccountPreview = ({name, balance}) => {
  return (
    <div>
      <p>Hello, {name}!</p>
      <div>
        <p>${balance}</p>
        <p>Total Amount</p>
      </div>
    </div>
  );
};

export default BankAccountPreview;