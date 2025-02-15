import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { Toaster } from 'sonner';

// FOR AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

import './index.css';
import { store } from './redux/store.ts';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
    <Toaster />
  </React.StrictMode>
);
