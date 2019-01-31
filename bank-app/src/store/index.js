import { createStore } from 'redux';

import reducer from '../reducers';

const initialState = { name: "Janny", balance: "102500.701"}
export const store = createStore(reducer, initialState);