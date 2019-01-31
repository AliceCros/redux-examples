export default (state, action) => {

  switch (action.type) {
    case "WITHDRAW":
      const balance = state.balance - action.balance;
      return { ...state, balance: balance }
    default:
      return state;
  }

}