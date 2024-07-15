import AddIcon from '@/assets/icons/AddIcon';
import ActiveLink from '../ui/ActiveLink';

import ListIcon from '@/assets/icons/ListIcon';

const Sidebar = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-4">
        <li className="flex">
          <ActiveLink className="flex gap-2" to="product-list">
            <ListIcon />
            Product List
          </ActiveLink>
        </li>
        <li className="flex">
          <ActiveLink className="flex gap-2" to="add-product">
            <AddIcon />
            Add Product
          </ActiveLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
