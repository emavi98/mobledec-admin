import React from 'react';
import ReactDOM from 'react-dom/client';
import './globals.css';
import { RouterProvider } from 'react-router-dom';
import { Routes } from './routes/Routes.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './queryClient.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Routes} />
    </QueryClientProvider>
  </React.StrictMode>
);
