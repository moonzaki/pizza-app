import { useEffect, useState } from 'react';
import { Outlet, useLocation, NavLink, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import Button from '../../components/Button/Button';
import styles from './Layout.module.scss';
import { useDisableAnimationOnResize } from '../../hooks/useDisableAnimationOnResize';
import { useSvgAnimation } from '../../hooks/useSvgAnimationOnLoad';

function Layout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isLoadedClass = useSvgAnimation('loaded', 100);
  useDisableAnimationOnResize(styles.sidebar);
  const navigate = useNavigate();
  useEffect(() => {
    // console.log(location);
  }, [location]);

  const logOut = () => {
    localStorage.removeItem('UserData');
    navigate('/auth/login');
  };

  return (
    <div className={styles['layout']}>
      <div
        className={cn(styles['burger'], { [styles['open']]: open })}
        onClick={() => setOpen(!open)}
      >
        <span></span>
      </div>
      <div className={cn(styles['sidebar'], { [styles['open']]: open })}>
        <div className={styles['user']}>
          <div className={styles['user-image']}>
            <svg
              className={cn('load-svg', isLoadedClass)} // Класс для анимации
              width="90"
              height="90"
              viewBox="0 0 90 90"
            >
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
              <NavLink
                to="/"
                className={({ isActive }) => cn(styles['link'], { [styles.active]: isActive })}
              >
                <svg
                  className={cn('load-svg', isLoadedClass)
                  }
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                >
                  <use href="/sprite.svg#menu-svg"></use>
                </svg>
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/basket"
                className={({ isActive }) => cn(styles['link'], { [styles.active]: isActive })}
              >
                <svg
                  className={cn('load-svg', isLoadedClass)}
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                >
                  <use href="/sprite.svg#basket-svg"></use>
                </svg>
                Basket
              </NavLink>
            </li>
          </ul>
        </nav>
        <Button
          onClick={logOut}
          appearence="logout"
          style={{ minWidth: '117px', width: 'fit-content', height: 'fit-content' }}
        >
          <svg
            className={cn('load-svg', isLoadedClass)}
            width="26"
            height="26"
            viewBox="0 0 26 26"
          >
            <use href="/sprite.svg#logout-svg"></use>
          </svg>
          Logout
        </Button>
      </div>
      <div className={cn(styles['content'])}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
