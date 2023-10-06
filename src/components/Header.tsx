import { useSelector } from 'react-redux';
import { RootReducerType } from '../type';

function Header() {
  const userEmail = useSelector((state:RootReducerType) => state.user.email);
  const userExpense = useSelector((state:RootReducerType) => state.wallet.expenses);
  return (
    <div>
      <p data-testid="email-field">
        Email:
        {' '}
        { userEmail }
      </p>
      <p data-testid="total-field">
        Despesa total:
        {' '}
        { userExpense }
      </p>
      <p data-testid="header-currency-field">
        BRL
      </p>
    </div>
  );
}

export default Header;
