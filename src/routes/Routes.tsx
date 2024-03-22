import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import {
  DashboardPage,
  CustomersPage,
  ErrorPage,
  OrdersPage,
  ProductsPage,
  ProvidersPage,
  ReportsPage,
} from '@/pages';

export const Routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <DashboardPage />,
      },
      {
        path: '/pedidos',
        element: <OrdersPage />,
      },
      {
        path: '/clientes',
        element: <CustomersPage />,
      },
      {
        path: '/productos',
        element: <ProductsPage />,
      },
      {
        path: '/proveedores',
        element: <ProvidersPage />,
      },
      {
        path: '/reportes',
        element: <ReportsPage />,
      },
    ],
  },
]);
