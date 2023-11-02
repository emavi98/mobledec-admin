import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import { DashboardPage } from '../pages/DashboardPage/DashboardPage';
import App from '../App';
import { OrdersPage } from '../pages/OrdersPage/OrdersPage';
import { CustomersPage } from '../pages/CustomersPage/CustomersPage';
import { ProductsPage } from '../pages/ProductsPage/ProductsPage';
import { ProvidersPage } from '../pages/ProvidersPage/ProvidersPage';
import { ReportsPage } from '../pages/ReportsPage/ReportsPage';

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
