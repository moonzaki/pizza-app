import {ReactNode} from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../store/store';

function RequireAuth({ children }: { children: ReactNode }) {
  const access_token = useSelector((state: RootState) => state.user.access_token);
  if (!access_token) {
    return <Navigate to='/auth/login' replace/>;
  }
  return children ;
}

export default RequireAuth;
