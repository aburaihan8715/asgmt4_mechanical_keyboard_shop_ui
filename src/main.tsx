import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { Toaster } from 'sonner';
// FOR AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import { store } from './redux/store.ts';
AOS.init();

import { router } from './routes/routes.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
    </ReduxProvider>
    <Toaster />
  </React.StrictMode>
);
