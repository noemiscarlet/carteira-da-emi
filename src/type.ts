export interface UserExpenseType {
  expenses: number,
}

export interface UserStateType {
  email: string,
}

export interface RootReducerType {
  user: UserStateType,
  wallet: UserExpenseType
}
