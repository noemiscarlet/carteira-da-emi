import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addEmail } from '../redux/actions';

export function Login() {
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeEmail = (event:React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const { target } = event;
    const { value } = target;
    setEmail(value);
    if (regex.test(value)) {
      return setEmailValid(true);
    } return setEmailValid(false);
  };
  const handleChangePass = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { value } = target;
    if (value.length >= 6) {
      return setPasswordValid(true);
    } return setPasswordValid(false);
  };

  const isButtonEnabled = emailValid && passwordValid;

  const buttonReload = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (isButtonEnabled) {
      dispatch(addEmail(email));
      navigate('/carteira');
    }
  };

  return (
    <form>
      <input
        type="email"
        placeholder="Email"
        data-testid="email-input"
        onChange={ handleChangeEmail }
      />
      <input
        type="password"
        placeholder="Password"
        data-testid="password-input"
        onChange={ handleChangePass }
      />
      <button
        disabled={ !isButtonEnabled }
        onClick={ buttonReload }
      >
        Entrar
      </button>
    </form>
  );
}
