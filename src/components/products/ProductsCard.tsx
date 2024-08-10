import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { TProduct } from '@/types';
import { Rating } from '@smastrom/react-rating';

const ProductsCard = ({ item }: { item: TProduct }) => {
  return (
    <div
      data-aos="zoom-in"
      className="min-h-[350px] bg-[#e9effd] border p-5 rounded flex flex-col gap-4"
    >
      <div>
        <img
          className="h-[160px] object-cover w-full rounded"
          src={`${
            item.image
              ? item.image
              : 'https://kono.store/cdn/shop/files/GMK_Firefly_-_Prophet_1_3be17f6c-b936-40db-b561-2fdc6463a6f0_1600x600_crop_center.png?v=1631814814&quot'
          }`}
          alt=""
        />
      </div>

      <div className="flex flex-col justify-between h-full gap-2">
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold text-[#212529]">
            {item.title}
          </h3>
          <p>Brand: {item.brand}</p>
          <p>Quantity: {item.availableQuantity}</p>
          <p>Price: $ {item.price}</p>

          <Rating style={{ maxWidth: 120 }} value={item.rating} readOnly />
        </div>

        <div>
          <Link to="/product-details">
            <Button className="w-full">Show details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
