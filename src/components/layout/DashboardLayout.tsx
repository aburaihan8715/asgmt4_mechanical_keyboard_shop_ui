import { Link, Outlet } from 'react-router-dom';
import Sidebar from '../dashboard/Sidebar';
import BrandLogo from '../ui/BrandLogo';

const DashboardLayout = () => {
  return (
    <div className="flex">
      <div className="flex-1 bg-[#e9effd] h-screen p-5">
        <Link to="/">
          <BrandLogo />
        </Link>
        <div className="mt-5">
          <Sidebar />
        </div>
      </div>

      <div className="flex-[4] h-screen p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
