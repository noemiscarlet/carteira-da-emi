import { AnyAction } from 'redux';
import { ADD_CURRENCIES, ADD_EXPENSES } from '../actions';

const INITIAL_STATE = {
  expenses: [],
  currencies: [],
};

export const walletReducer = (state = INITIAL_STATE, action:AnyAction) => {
  switch (action.type) {
    case ADD_EXPENSES:
      return {
        ...state,
        expenses: [
          ...state.expenses,
          action.payload,
        ],
      };
    case ADD_CURRENCIES:
      return {
        ...state,
        currencies: action.payload,
      };
    default:
      return state;
  }
};
