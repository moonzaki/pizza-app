import { Link, Outlet } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './Menu.module.scss';
import { useState  } from 'react';
import cn from 'classnames';
import {useDisableAnimationOnResize} from '../../hooks/useDisableAnimationOnResize';

function Layout() {
  const [open, setOpen] = useState(false);
  useDisableAnimationOnResize(styles.menu);
  console.log('render');

  return (
    <div className={styles['layout']}>
      <div className={cn(styles['burger'], {[styles['open']]: open})} onClick={() => setOpen(!open)}>
        <span></span>
      </div>
      <div className={cn(styles['menu'],
        {
          [styles['open']]: open
        })}>
        <div className={styles['user']}>
          <div className={styles['user-image']}>
            <svg width="90" height="90" viewBox="0 0 90 90">
              <use href="/sprite.svg#user-svg"></use>
            </svg>
          </div>
          <div className={styles['user-info']}>
            <div className={styles['headline']}>User Name</div>
            <div className={styles['email']}>user@example.com</div>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <svg width="23" height="23" viewBox="0 0 23 23">
                <use href="/sprite.svg#menu-svg"></use>
              </svg>
              <Link to="/">Menu</Link>
            </li>
            <li>
              <svg width="23" height="23" viewBox="0 0 23 23">
                <use href="/sprite.svg#basket-svg"></use>
              </svg>
              <Link to="/basket">Basket</Link>
            </li>
          </ul>
        </nav>
        <Button appearence='logout' style={{ minWidth: '117px', width: 'fit-content', height: 'fit-content'}}>
          <svg width="26" height="26" viewBox="0 0 26 26">
            <use href="/sprite.svg#logout-svg"></use>
          </svg>
          Logout
        </Button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
