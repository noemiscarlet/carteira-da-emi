import { AnyAction } from 'redux';
import { ADD_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

export const userReducer = (state = INITIAL_STATE, action:AnyAction) => {
  switch (action.type) {
    case ADD_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};
