import { AnyAction } from 'redux';
import { ADD_CURRENCIES, ADD_EXPENSES, DELETE_EXPENSE } from '../actions';

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
    case DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter(({ id }) => action.payload !== id),
      };
    default:
      return state;
  }
};
