export const setIncrease = (activeSession) => {
  return { type: 'INCREASE', activeSession: activeSession +1 }
}

export const setDecrease = (activeSession) => {
  return { type: 'DECREASE', activeSession: activeSession -1 }
}