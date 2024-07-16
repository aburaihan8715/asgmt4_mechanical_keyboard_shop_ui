import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/ui/SectionHeading';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <section className="px-10 py-20">
      <SectionHeading heading="Your Bag" />
      <div className="mb-5">
        <Link to="/products">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
      <div className="flex gap-4">
        <ul className="flex-[4] flex flex-col gap-10 border">
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
        </ul>

        <div className="flex-[1] ">
          <div className="p-5 space-y-2 border rounded-md">
            <h4 className="text-2xl font-medium text-gray-700">
              Order Summary
            </h4>

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$ 00.0</span>
            </div>

            <div className="flex justify-between">
              <span>Discount</span>
              <span>$ 00.0</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping Charge</span>
              <span>$ 00.0</span>
            </div>

            <div className="flex justify-between text-xl font-medium">
              <span>Total</span>
              <span>$ 00.0</span>
            </div>

            <div>
              <Link to={`/checkout`}>
                <Button className="w-full">Checkout Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;

const CartProduct = () => {
  return (
    <li className="flex items-center h-full gap-10 p-5 border-b">
      <div className="">
        <img
          className="w-[200px] h-[200px] object-cover"
          src="https://kono.store/cdn/shop/files/Discord---Banner---2_2000x800_crop_center.jpg?v=1660947236"
          alt=""
        />
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div className="flex flex-col gap-4 ">
        <div className="flex gap-2">
          <button className="text-2xl">-</button>
          <span className="flex items-center justify-center w-10 h-10 border ">
            00
          </span>
          <button className="text-2xl">+</button>
        </div>
        <div className="text-3xl text-gray-700">$ 45</div>
      </div>
      <div className="">
        <Button>Delete</Button>
      </div>
    </li>
  );
};
