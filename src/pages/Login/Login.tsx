import { FormEvent, useState } from 'react';
import Headline from '../../components/Headline/Headline';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import styles from './Login.module.scss';
import axios, { AxiosError } from 'axios';
import { URL_PREFIX } from '../../helpers/API';
import { LoginResponse } from '../../interfaces/auth.interface';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { userActions } from '../../store/user.slice';
export type LoginForm = {
  email: {
    value: string
  };
  password: {
    value: string
  };
}

function Login() {
  const [error, setError] = useState<string | null>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const sendLogin = async (email: string, password: string) => {
    try {
      const { data } = await axios.post<LoginResponse>(`${URL_PREFIX}auth/login`, { email, password });
      dispatch(userActions.addToken(data.access_token));
      navigate('/');
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
        setError(error.response?.data.message);
      }
    }
  };
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    const target = e.target as typeof e.target & LoginForm;
    const { email, password } = target;

    await sendLogin(email.value, password.value);
  };

  return (
    <div className={cn(styles.layout)}>
      <div className={cn(styles.logo)}>
        <img src="/logo.svg" alt="" />
      </div>
      <div className={cn(styles.content)}>
        <form className={cn(styles.form)} onSubmit={submit}>
          <Headline style={{ margin: '0px' }}>Login</Headline>
          <div className={cn(styles.placeholder)}>
            <label htmlFor="email" style={{ margin: '0px' }}>Your email</label>
            <Input id="email" placeholder="Enter your email" name='email' />
          </div>
          <div className={cn(styles.placeholder)}>
            <label htmlFor="password" style={{ margin: '0px' }}>Your password</label>
            <Input id="password" placeholder="Enter your password" name='password' />
          </div>
          <div className={cn(styles.submit)}>
            {error && <div className={cn(styles.error)}>{error}</div>}
            <Button
              appearence="big"
              onClick={() => {
                console.log('login');
              }}
            >Login</Button>
          </div>
          <div className={cn(styles['register'])}>
            <p>No registration?</p>
            <Link to="/auth/register">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
