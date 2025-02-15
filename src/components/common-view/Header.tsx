import BrandLogo from './BrandLogo';
import { FaCartShopping } from 'react-icons/fa6';
import { Button } from '../ui/button';
import ActiveLink from './ActiveLink';
import { Link } from 'react-router';
import { useAppSelector } from '@/redux/hooks';
import { useState } from 'react';
import { getCart } from '@/redux/features/cart/cartSlice';
import { getUserInfo } from '@/redux/features/auth/authSlice';

const Header = () => {
  const state = useAppSelector((state) => state);
  const cartData = getCart(state);
  const products = cartData?.products;
  const { user } = getUserInfo(state);
  const [open, setOpen] = useState(false);

  const links = (
    <>
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
      {user && (
        <li>
          <ActiveLink to={`${user?.role}/dashboard`}>Dashboard</ActiveLink>
        </li>
      )}
    </>
  );

  return (
    <header>
      {/* DESKTOP NAV */}
      <div className="md:flex hidden bg-[#e9effd] justify-between h-[80px] items-center px-10 fixed top-0 w-full z-20">
        {/* LOGO */}
        <Link to="/">
          <BrandLogo />
        </Link>
        <nav>
          <ul className="flex gap-4 font-semibold text-[#212529]">
            {links}
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
            <Link to={`/auth/login`}>
              <Button>Login</Button>
            </Link>
          </div>
          <div>
            <img
              className="object-cover w-10 h-10 rounded-full"
              src="https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916_640.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* MOBILE NAV */}
      <div className="md:hidden">
        <div className="flex px-2 bg-[#e9effd] h-[80px] items-center justify-between fixed top-0 w-full z-20">
          <div onClick={() => setOpen(!open)} className="">
            {open && (
              <button className="flex items-center justify-center w-10 h-10 text-3xl border text-primary border-primary">
                &#9776;
              </button>
            )}

            {!open && (
              <button className="flex items-center justify-center w-10 h-10 text-3xl border text-primary border-primary">
                &#10006;
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            <div className="mr-1">
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
              <Button onClick={() => alert('Not implement yet')}>
                Login
              </Button>
            </div>

            <div>
              <img
                className="object-cover w-10 h-10 rounded-full"
                src="https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916_640.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <nav className="">
          <ul
            className={`flex bg-yellow-50/90 fixed top-[80px] z-20 h-full flex-col gap-2 font-semibold text-[#212529] pt-5 pl-8 w-[180px] -translate-x-[100%] transition-transform duration-500 ${
              !open && 'translate-x-0'
            }`}
          >
            {links}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
