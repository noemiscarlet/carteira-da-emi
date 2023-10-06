import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, ObjExpensesType, RootReducerType } from '../type';
import { fetchExchangeRates } from '../utils';
import { addCurrencies, fetchCurrentExchange } from '../redux/actions';

const INITIAL_STATE = {
  id: 0,
  currency: 'USD',
  description: '',
  method: 'dinheiro',
  tag: 'alimentacao',
  value: '',
  exchangeRates: {},
};

function WalletForm() {
  const dispatch: Dispatch = useDispatch();
  const { expenses, currencies } = useSelector((state: RootReducerType) => state.wallet);

  const [expense, setExpense] = useState<ObjExpensesType>(INITIAL_STATE);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value,
    }));
  };

  useEffect(() => {
    const getCoins = async () => {
      const coinsValue = await fetchExchangeRates();
      dispatch(addCurrencies(coinsValue));
    };

    getCoins();
  }, []);

  const addExpense = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const id = expenses.length > 0 ? expenses[expenses.length - 1].id + 1 : 0;
    dispatch(fetchCurrentExchange({
      ...expense,
      id,
    }));

    setExpense(INITIAL_STATE);
  };

  return (
    <form>
      <label htmlFor="value">Valor</label>
      <input
        data-testid="value-input"
        name="value"
        onChange={ handleChange }
        value={ expense.value || '' }
      />
      <label htmlFor="description">Descrição</label>
      <input
        name="description"
        data-testid="description-input"
        onChange={ handleChange }
        value={ expense.description || '' }
      />
      <label htmlFor="currency">Moedas: </label>
      <select
        name="currency"
        id="currency"
        data-testid="currency-input"
        onChange={ handleChange }
        value={ expense.currency || '' }
      >
        { currencies.map((coin: string) => (
          <option key={ coin }>
            {coin}
          </option>
        )) }
      </select>
      <label htmlFor="method">Método de pagamento: </label>
      <select
        name="method"
        id="method"
        data-testid="method-input"
        onChange={ handleChange }
        value={ expense.method || '' }
      >
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de crédito">Cartão de crédito</option>
        <option value="Cartão de débito">Cartão de débito</option>
      </select>
      <label htmlFor="tag">Categoria</label>
      <select
        data-testid="tag-input"
        name="tag"
        id="tag"
        onChange={ handleChange }
        value={ expense.tag || '' }
      >
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>
      </select>
      <button
        onClick={ addExpense }
      >
        Adicionar despesa
      </button>
    </form>
  );
}

export default WalletForm;
