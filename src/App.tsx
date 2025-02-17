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
import Checkout from './pages/common-view/Checkout';
import CheckAuth from './components/common-view/CheckAuth';
import { useAppSelector } from './redux/hooks';
import Success from './pages/common-view/Success';
const App = () => {
  const userData = useAppSelector((state) => state.auth);
  const isAuthenticated = userData?.isAuthenticated;
  const role = userData?.user?.role as string;

  return (
    <BrowserRouter>
      <Routes>
        {/* ======common======= */}
        <Route
          path="/"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} role={role}>
              <CommonLayout />
            </CheckAuth>
          }
        >
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products" element={<Products />} />
          <Route path="product-details/:id" element={<ProductDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="success" element={<Success />} />

          <Route path="/unauth" element={<Unauth />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* ======admin======= */}
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} role={role}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="product-list" element={<ProductList />} />
          <Route path="add-product" element={<AddProduct />} />
        </Route>

        {/* ======user======= */}
        <Route
          path="/user"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} role={role}>
              <UserLayout />
            </CheckAuth>
          }
        >
          <Route index element={<UserDashboard />} />
          <Route path="dashboard" element={<UserDashboard />} />
        </Route>

        {/* ======auth======= */}
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} role={role}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
