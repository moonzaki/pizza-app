import Headline from '../../components/Headline/Headline';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import styles from './Register.module.scss';
import { FormEvent } from 'react';

function Register() { 

  const submit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className={cn(styles.layout)}>
      <div className={cn(styles.logo)}>
        <img src="/logo.svg" alt="" />
      </div>
      <div className={cn(styles.content)}>
        <form className={cn(styles.form)} onSubmit={submit}>
          <Headline style={{ margin: '0px' }}>Registration</Headline>
          <div className={cn(styles.placeholder)}>
            <label htmlFor="login" style={{ margin: '0px' }}>Your email</label>
            <Input id="login" placeholder="Enter your email" name='login' />
          </div>
          <div className={cn(styles.placeholder)}>
            <label htmlFor="password" style={{ margin: '0px' }}>Your password</label>
            <Input id="password" placeholder="Enter your password" name='password' />
          </div>
          <div className={cn(styles.placeholder)}>
            <label htmlFor="name" style={{ margin: '0px' }}>Your name</label>
            <Input id="name" placeholder="Enter your name" name='name' />
          </div>
          <Button
            appearence="big"
            onClick={() => {
              console.log('register');
            }}
          >Register</Button>
          <div className={cn(styles['register'])}>
            <p>Do you have registration?</p>
            <NavLink to="/auth/login">Enter</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
