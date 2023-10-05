import { combineReducers } from 'redux';
import { userReducer } from './user';

export const rootReducer = combineReducers({
  user: userReducer,
});
// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
