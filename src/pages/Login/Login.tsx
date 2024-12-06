import { FormEvent, useEffect } from 'react';
import Headline from '../../components/Headline/Headline';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import styles from './Login.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { login, userActions } from '../../store/user.slice';
import { RootState } from '../../store/store';

export type LoginForm = {
  email: {
    value: string
  };
  password: {
    value: string
  };
}

function Login() {
  const { access_token, errorMessage } = useSelector((state: RootState) => state.user);
  
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (access_token) {
      navigate('/');
    }
  }, [access_token, navigate]);

  const sendLogin = async (email: string, password: string) => {
    dispatch(login({ email, password }));
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    dispatch(userActions.clearLoginError());
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
            {errorMessage && <div className={cn(styles.error)}>{errorMessage}</div>}
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
