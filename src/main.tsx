import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
//import App from './App.tsx';
import Menu from './pages/Menu/Menu';
import Basket from './pages/Basket/Basket';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Menu/Menu.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/', element: <Menu />
      },
      {
        path: '/basket', element: <Basket />
      },
      { path: '*', element: <ErrorPage /> }
    ]
  }
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
    <RouterProvider router={router} future={{
      v7_startTransition: true
    }}/>
    {/*<App />*/}
  </StrictMode>
);
