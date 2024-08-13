import BrandLogo from '../ui/BrandLogo';
import { FaCartShopping } from 'react-icons/fa6';
import { Button } from '../ui/button';
import ActiveLink from '../ui/ActiveLink';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@/redux/hooks';
const Header = () => {
  const cartData = useAppSelector((state) => state.cart);
  const products = cartData?.products;

  return (
    <header className="flex bg-[#e9effd] justify-between h-[80px] items-center px-10">
      {/* LOGO */}
      <Link to="/">
        <BrandLogo />
      </Link>
      {/* DESKTOP NAV */}
      <nav>
        <ul className="flex gap-4 font-semibold text-[#212529]">
          <li>
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/products">Products</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/about">About Us</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/contact">Contact Us</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/dashboard">Dashboard</ActiveLink>
          </li>
        </ul>
      </nav>

      {/* CART,LOGIN,PROFILE GROUP */}
      <div className="flex items-center gap-4">
        <div>
          <Link to="/cart">
            <div className="relative mr-2">
              <FaCartShopping className="text-base text-[#212529]" />
              <span className="absolute flex items-center justify-center w-5 h-5 font-semibold rounded-full bg-primary text-[#f8f9fa] -top-3 left-3">
                {products.length || 0}
              </span>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </div>
        <div>
          <img
            onClick={() => alert('Not implemented yet!')}
            className="object-cover w-10 h-10 rounded-full"
            src="https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916_640.jpg"
            alt=""
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
