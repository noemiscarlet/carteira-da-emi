import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, ObjExpensesType, RootReducerType } from '../type';
import { deleteExpense } from '../redux/actions';

export function Table() {
  const { expenses } = useSelector((state: RootReducerType) => state.wallet);
  const dispatch: Dispatch = useDispatch();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(({ id,
            currency,
            description,
            method,
            tag,
            value,
            exchangeRates,
          }: ObjExpensesType) => (
            <tr key={ id }>
              <td>{ description }</td>
              <td>{ tag }</td>
              <td>{ method }</td>
              <td>{ Number(value).toFixed(2) }</td>
              <td>{ exchangeRates[currency].name }</td>
              <td>
                {
                  Number(
                    exchangeRates[currency].ask,
                  ).toFixed(2)
                }
              </td>
              <td>
                {
                  (
                    Number(
                      exchangeRates[currency].ask,
                    ) * Number(value)
                  ).toFixed(2)
                }
              </td>
              <td>Real</td>
              <td>
                <button
                  data-testid="delete-btn"
                  onClick={ () => dispatch(deleteExpense(id)) }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
