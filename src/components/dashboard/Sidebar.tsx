import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="product-list">Product List</Link>{' '}
          </li>
          <li>
            <Link to="add-product">Add Product</Link>{' '}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
