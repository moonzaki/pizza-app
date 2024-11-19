import { forwardRef } from 'react';
import {InputProps} from './Input.props';
import styles from './Input.module.scss';
import cn from 'classnames';

const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input({
    isValid = true,
    className,
    ...props }, ref
  ){
    return (
      <input
        ref={ref}
        className={cn(
          styles.input,
          className, {
            [styles.invalid]: isValid
          })
        }
        {...props}
        type="text" />
    );
  });

export default Input;
