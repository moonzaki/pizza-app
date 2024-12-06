import { ButtonProps } from './Button.props';
import cn from 'classnames';
import styles from './Button.module.scss';
/*import { FC } from 'react';*/

/*
// Alternative variant
export const ButtonAlt: FC<IButtonProps> = ({ className, children, ...props }) => { 
  return (
    <button className={ cn('button', className)} {...props}>
      {children}
    </button>
  );
}
*/

function Button({children, className, appearence='small', ...props}:ButtonProps) {
  return (
    <button
      className={cn(
        styles.button,
        styles.accent,
        className,
        {
          [styles.small]: appearence === 'small',
          [styles.big]: appearence === 'big',
          [styles.logout]: appearence === 'logout',
          [styles['add-dish']]: appearence === 'add-dish'
        }
      )}
      {...props}>
      {children}
    </button>
  );
}

export default Button;
