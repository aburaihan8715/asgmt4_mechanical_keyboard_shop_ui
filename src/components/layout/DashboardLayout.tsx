import { Link, Outlet } from 'react-router-dom';
import Sidebar from '../dashboard/Sidebar';
import BrandLogo from '../ui/BrandLogo';
import usePageRefreshAlert from '@/hooks/usePageRefreshAlert';

const DashboardLayout = () => {
  usePageRefreshAlert();
  return (
    <>
      <div className="flex">
        <div className="sticky top-0 bottom-0 flex-1 h-screen ">
          <div className=" bg-[#e9effd] h-screen p-5 pl-10">
            <Link to="/">
              <BrandLogo />
            </Link>
            <div className="mt-5">
              <Sidebar />
            </div>
          </div>
        </div>

        <div className="flex-[4] p-5">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
