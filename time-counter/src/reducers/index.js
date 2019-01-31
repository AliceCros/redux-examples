export default (state, action) => {

  switch (action.type) {
    case 'INCREASE':
      return { ...state, minutes: action.activeSession };
    case 'DECREASE':
      return { ...state, minutes: action.activeSession };
    default:
      return state;
  }

}