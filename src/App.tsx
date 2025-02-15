import { BrowserRouter, Routes, Route } from 'react-router';
import CommonLayout from './components/layout/CommonLayout';
import AdminLayout from './components/layout/AdminLayout';
import Home from './pages/common-view/Home';
import AboutUs from './pages/common-view/AboutUs';
import ContactUs from './pages/common-view/ContactUs';
import AdminDashboard from './pages/admin-view/Dashboard';
import ProductList from './pages/admin-view/ProductList';
import AddProduct from './pages/admin-view/AddProduct';
import Unauth from './pages/common-view/Unauth';
import NotFound from './pages/common-view/NotFound';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import AuthLayout from './components/layout/AuthLayout';
import UserLayout from './components/layout/UserLayout';
import UserDashboard from './pages/user-view/Dashboard';
import Cart from './pages/common-view/Cart';
import ProductDetails from './pages/common-view/ProductDetails';
import Products from './pages/common-view/Products';
import Checkout from './pages/user-view/Checkout';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* ======common======= */}
        <Route path="/" element={<CommonLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products" element={<Products />} />
          <Route path="product-details/:id" element={<ProductDetails />} />

          <Route path="/unauth" element={<Unauth />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* ======admin======= */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="product-list" element={<ProductList />} />
          <Route path="add-product" element={<AddProduct />} />
        </Route>

        {/* ======user======= */}
        <Route path="/user" element={<UserLayout />}>
          <Route index element={<UserDashboard />} />
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>

        {/* ======auth======= */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
