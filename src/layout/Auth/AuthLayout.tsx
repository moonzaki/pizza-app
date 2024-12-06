import { Outlet  } from 'react-router-dom';
import styles from './AuthLayout.module.scss';

function AuthLayout() {
  return (
    <div className={styles.layout}>
      <Outlet />
    </div>
  );
}
export default AuthLayout;
