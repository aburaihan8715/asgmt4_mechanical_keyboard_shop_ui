import { Link, Outlet } from 'react-router';
import Sidebar from '../common-view/Sidebar';
import BrandLogo from '../common-view/BrandLogo';
import ActiveLink from '../common-view/ActiveLink';
import { FaClipboardList, FaHome, FaPlusSquare } from 'react-icons/fa';

const adminLinks = (
  <>
    <li className="flex">
      <ActiveLink className="flex items-center gap-2" to="/">
        <FaHome className="text-2xl md:text-base" />
        <span className="hidden md:block">Home</span>
      </ActiveLink>
    </li>
    <li className="flex">
      <ActiveLink className="flex items-center gap-2" to="product-list">
        <FaClipboardList className="text-2xl md:text-base" />
        <span className="hidden md:block">Product List</span>
      </ActiveLink>
    </li>
    <li className="flex">
      <ActiveLink className="flex items-center gap-2" to="add-product">
        <FaPlusSquare className="text-2xl md:text-base" />
        <span className="hidden md:block">Add Product</span>
      </ActiveLink>
    </li>
  </>
);

const AdminLayout = () => {
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
                <Sidebar>{adminLinks}</Sidebar>
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

export default AdminLayout;
