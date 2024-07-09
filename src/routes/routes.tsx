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

export const router = createBrowserRouter([
  {
    path: '/',
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
        path: 'product-details',
        element: <ProductDetails />,
      },

      {
        path: 'products',
        element: <Products />,
      },
    ],
  },

  {
    path: 'dashboard',
    element: <DashboardLayout />,
    children: [
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
]);
