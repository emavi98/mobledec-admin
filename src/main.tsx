import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Providers } from './store/providers.tsx';
import { RouterProvider } from 'react-router-dom';
import { Routes } from './routes/Routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={Routes} />
    </Providers>
  </React.StrictMode>
);
