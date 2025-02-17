import BrandLogo from './BrandLogo';
import { FaBars, FaCartShopping } from 'react-icons/fa6';
import { Button } from '../ui/button';
import ActiveLink from './ActiveLink';
import { Link } from 'react-router';
import { useAppSelector } from '@/redux/hooks';
import { useState } from 'react';

import { FaTimes } from 'react-icons/fa';
import { TProduct } from '@/types';
import LogoutButton from './LogoutButton';

const Header = () => {
  const cartData = useAppSelector((state) => state.cart);
  const userData = useAppSelector((state) => state.auth);
  const products = cartData?.products || [];
  const user = userData?.user;

  const [open, setOpen] = useState(false);

  const links = (
    <>
      <li className="">
        <ActiveLink className="flex w-full" to="/">
          Home
        </ActiveLink>
      </li>
      <li>
        <ActiveLink className="flex w-full" to="/products">
          Products
        </ActiveLink>
      </li>
      <li>
        <ActiveLink to="/about">About</ActiveLink>
      </li>
      <li>
        <ActiveLink className="flex w-full" to="/contact">
          Contact
        </ActiveLink>
      </li>
      {user && (
        <li>
          <ActiveLink
            className="flex w-full"
            to={`${user?.role}/dashboard`}
          >
            Dashboard
          </ActiveLink>
        </li>
      )}
    </>
  );

  return (
    <header>
      {/* DESKTOP NAV */}
      <nav className="md:flex hidden bg-blue-200 h-[80px] items-center px-10 fixed top-0 w-full z-20 gap-10">
        {/* LOGO */}

        <div className="hidden lg:block">
          <Link to="/">
            <BrandLogo />
          </Link>
        </div>

        <ul className="flex items-center ml-auto gap-4 font-semibold text-[#212529]">
          {links}
        </ul>

        {/* CART,LOGIN,PROFILE GROUP */}
        <div className="flex items-center gap-4">
          <div>
            <CartButton products={products} />
          </div>

          {user ? (
            <LogoutButton />
          ) : (
            <Link to={`/auth/login`}>
              <Button>Login</Button>
            </Link>
          )}

          {user && (
            <img
              className="object-cover w-10 h-10 rounded-full"
              src="https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916_640.jpg"
              alt=""
            />
          )}
        </div>
      </nav>

      {/* MOBILE NAV */}
      <nav className="md:hidden">
        <div className="flex px-2 bg-blue-200 h-[80px] items-center justify-between fixed top-0 w-full z-20">
          <button
            className="flex items-center justify-center text-2xl border rounded-md size-10 text-primary border-primary"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>

          <div className="flex items-center gap-3">
            <div className="mr-1">
              <CartButton products={products} />
            </div>

            {user ? (
              <LogoutButton />
            ) : (
              <Link to={`/auth/login`}>
                <Button>Login</Button>
              </Link>
            )}

            {user && (
              <img
                className="object-cover w-10 h-10 rounded-full"
                src="https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916_640.jpg"
                alt=""
              />
            )}
          </div>
        </div>

        <ul
          className={`flex bg-blue-200/90 fixed top-[80px] z-20 h-full flex-col gap-2 font-semibold text-[#212529] pt-5 pl-5 pr-2 w-[180px]  transition-transform duration-500 ${
            open ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {links}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

const CartButton = ({ products }: { products: TProduct[] }) => {
  return (
    <Link to="/cart">
      <div className="relative mr-2">
        <FaCartShopping className="text-base text-[#212529]" />
        <span className="absolute flex items-center justify-center w-5 h-5 font-semibold rounded-full bg-primary text-[#f8f9fa] -top-3 left-3">
          {products?.length ?? 0}
        </span>
      </div>
    </Link>
  );
};
