export const setWithdraw = (balance) => {
  console.log(balance);
  return { type: "WITHDRAW", balance: balance}
}