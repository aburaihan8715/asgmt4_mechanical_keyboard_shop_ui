import { Button } from '@/components/ui/button';
import { Rating } from '@smastrom/react-rating';

const ProductDetails = () => {
  return (
    <section className="h-[90vh] px-10 py-20">
      <div className="flex h-full gap-10">
        <div className="flex-1 h-full">
          <img
            className="object-cover w-full h-full rounded"
            src="https://kono.store/cdn/shop/files/Discord---Banner---2_2000x800_crop_center.jpg?v=1660947236"
            alt=""
          />
        </div>

        <div className="flex-[2] flex flex-col gap-5">
          <h1 className="text-3xl font-medium text-[#212529]">
            Lorem ipsum dolor sit amet.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            eligendi dolorum officia quos deserunt adipisci, harum soluta
            incidunt. Dolorem, ab earum ipsam nesciunt praesentium eos
            laudantium! Dolorem nemo nihil explicabo aliquid itaque
            commodi, officiis asperiores tempore. Vitae, voluptates soluta
            corrupti excepturi eaque temporibus eos aperiam, distinctio
            dolor, non perferendis dolore.
          </p>

          <p className="text-3xl text-gray-700">$ 45.00</p>

          <div className="flex gap-5">
            <span>
              <strong className="text-gray-700">Brand:</strong> name of
              brand
            </span>
            <span>
              <strong className="text-gray-700">Quantity:</strong> 20
            </span>
          </div>

          <div className="flex items-center gap-5">
            <Rating style={{ maxWidth: 100 }} value={5} readOnly />
            <span>5 Reviews</span>
          </div>

          <div className="flex items-center gap-10">
            <div className="flex gap-2">
              <button className="text-2xl">-</button>
              <span className="flex items-center justify-center w-10 h-10 border ">
                00
              </span>
              <button className="text-2xl">+</button>
            </div>
            <div>
              <Button>Add to Cart</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
