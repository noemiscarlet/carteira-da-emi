export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const addEmail = (email:string) => ({
  type: ADD_EMAIL,
  payload: email,
});

export const addExpenses = (expense: number) => ({
  type: ADD_EXPENSES,
  payload: expense,
});
