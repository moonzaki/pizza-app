import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Basket from './pages/Basket/Basket';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Dish from './pages/Dish/Dish';
import { RouterProvider, createBrowserRouter, defer } from 'react-router-dom';
import Layout from './layout/Layout/Layout.tsx';
import axios from 'axios';
import { URL_PREFIX } from './helpers/API';
import AuthLayout from './layout/Auth/AuthLayout.tsx';
import Login from './pages/Login/Login.tsx';
import Register from './pages/Register/Register.tsx';
import RequireAuth from './helpers/RequireAuth.tsx';
import {store} from './store/store.ts';
import { Provider } from 'react-redux';


const Menu = lazy(() => import('./pages/Menu/Menu'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RequireAuth><Layout /></RequireAuth>,
    children: [
      {
        path: '/',
        element: <Suspense fallback={<div>Loading menu...</div>}>{<Menu />}</Suspense>
      },
      {
        path: '/basket',
        element: <Basket />
      },
      {
        path: '/dish/:id',
        element: <Dish />,
        errorElement: <>Error</>,
        loader: async ({ params }) => {
          return defer({
            data: new Promise((resolve, reject) => {
              setTimeout(() => {
                axios.get(`${URL_PREFIX}products/${params.id}`)
                  .then((data) => resolve(data))
                  .catch((err) => reject(err));
              }, 100);
            })
          });
        }
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout/>,
    children: [
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'register',
        element: <Register/>
      }
    ]
  },
  { path: '*', element: <ErrorPage /> }
], {
  basename: import.meta.env.BASE_URL,
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} future={{
        v7_startTransition: true
      }}/>
    </Provider>
  </StrictMode>
);
