import { createBrowserRouter } from 'react-router-dom';

import AppLayout from '@/components/layout/AppLayout';
import AboutUs from '@/pages/AboutUs';
import Cart from '@/pages/Cart';
import Checkout from '@/pages/Checkout';
import ContactUs from '@/pages/ContactUs';
import ProductDetails from '@/pages/ProductDetails';
import Products from '@/pages/Products';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Home from '@/pages/Home';
import ProductList from '@/pages/dashboard/ProductList';
import AddProduct from '@/pages/dashboard/AddProduct';
import Login from '@/pages/Login';
import Dashboard from '@/pages/dashboard/Dashboard';
import Register from '@/pages/Register';
import Success from '@/pages/Success';

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <AboutUs />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'contact',
        element: <ContactUs />,
      },
      {
        path: 'product-details/:id',
        element: <ProductDetails />,
      },

      {
        path: 'products',
        element: <Products />,
      },

      {
        path: '/success',
        element: <Success />,
      },
    ],
  },

  {
    element: <DashboardLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: 'product-list',
        element: <ProductList />,
      },

      {
        path: 'add-product',
        element: <AddProduct />,
      },
    ],
  },

  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);
