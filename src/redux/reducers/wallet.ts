import { AnyAction } from 'redux';
import { ADD_EXPENSES } from '../actions';

const INITIAL_STATE = {
  expenses: 0,
};

export const walletReducer = (state = INITIAL_STATE, action:AnyAction) => {
  switch (action.type) {
    case ADD_EXPENSES:
      return {
        ...state,
        expenses: action.payload + state.expenses,
      };
    default:
      return state;
  }
};
