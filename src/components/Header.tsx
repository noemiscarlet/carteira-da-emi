import { useSelector } from 'react-redux';
import { RootReducerType } from '../type';

function Header() {
  const userEmail = useSelector((state:RootReducerType) => state.user.email);
  const expenses = useSelector((state:RootReducerType) => state.wallet.expenses);

  const totalSync = () => {
    return expenses.reduce((acc, curr) => {
      const { currency, exchangeRates } = curr;
      const ask = Number(exchangeRates[currency].ask);
      return acc + (Number(ask) * Number(curr.value));
    }, 0).toFixed(2);
  };

  return (
    <div>
      <p data-testid="email-field">
        Email:
        {' '}
        { userEmail }
      </p>
      <p data-testid="total-field">
        { totalSync() }
      </p>
      <p data-testid="header-currency-field">
        BRL
      </p>
    </div>
  );
}

export default Header;
