import { Link, Outlet } from 'react-router';
import Sidebar from '../common-view/Sidebar';
import BrandLogo from '../common-view/BrandLogo';
import ActiveLink from '../common-view/ActiveLink';
import { FaHome } from 'react-icons/fa';
import LogoutButton from '../common-view/LogoutButton';

const userLinks = (
  <>
    <li className="flex">
      <ActiveLink
        className="flex items-center w-full gap-2"
        to="/user/dashboard"
      >
        <FaHome className="text-2xl md:text-base" />
        <span className="hidden md:block">Dashboard</span>
      </ActiveLink>
    </li>
  </>
);

const UserLayout = () => {
  return (
    <>
      <div className="flex">
        <div>
          <div className="sticky top-0 bottom-0 md:flex-1 md:h-screen ">
            <div className=" bg-[#e9effd] h-screen md:p-5 p-1 md:pl-10">
              <Link className="hidden md:block" to="/">
                <BrandLogo />
              </Link>
              <div className="mt-5">
                <Sidebar>
                  {userLinks}
                  <LogoutButton isText={false} />
                </Sidebar>
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex-[4] p-5 flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default UserLayout;
