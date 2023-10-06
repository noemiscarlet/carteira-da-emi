import { Dispatch, ObjExpensesType } from '../../type';

export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const addEmail = (email:string) => ({
  type: ADD_EMAIL,
  payload: email,
});

export const addExpense = (expense: ObjExpensesType) => ({
  type: ADD_EXPENSES,
  payload: expense,
});

export const addCurrencies = (currencies: string[]) => ({
  type: ADD_CURRENCIES,
  payload: currencies,
});

export const deleteExpense = (id: number) => ({
  type: DELETE_EXPENSE,
  payload: id,
});

export function fetchCurrentExchange(obj: ObjExpensesType) {
  return async (dispatch: Dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    dispatch(
      addExpense({
        ...obj,
        exchangeRates: data,
      }),
    );
  };
}
