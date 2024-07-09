import { Link } from 'react-router-dom';
import BrandLogo from '../ui/BrandLogo';
const Header = () => {
  return (
    <header className="flex bg-[#e9effd] justify-between h-[80px] items-center px-10">
      {/* LOGO */}
      <BrandLogo />
      {/* DESKTOP NAV */}
      <nav>
        <ul className="flex gap-4 font-semibold text-[#212529]">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>

      {/* CART,LOGIN,PROFILE GROUP */}
      <div className="flex gap-4">
        <div>Cart</div>
        <div>Login</div>
        <div>Profile</div>
      </div>
    </header>
  );
};

export default Header;
