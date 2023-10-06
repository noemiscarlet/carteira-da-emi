import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export interface UserExpenseType {
  expenses: ObjExpensesType[],
  currencies: string[]
}

export interface UserStateType {
  email: string,
}

export interface RootReducerType {
  user: UserStateType,
  wallet: UserExpenseType
}

export interface ObjExpensesType {
  id: number;
  value: string;
  description: string;
  currency: string;
  method: string;
  tag: string;
  exchangeRates: ExchangeRates
}

interface ExchangeRate {
  code: string;
  name: string;
  ask: string;
}

interface ExchangeRates {
  [currency: string]: ExchangeRate;
}

export type Dispatch = ThunkDispatch<UserExpenseType, null, AnyAction>;
