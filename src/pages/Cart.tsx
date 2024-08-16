import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/ui/SectionHeading';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { TProduct } from '@/types';
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '@/redux/features/cart/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cart = useAppSelector((state) => state.cart);

  return (
    <section className="md:px-10 px-1 md:py-20 py-10">
      <SectionHeading heading="Your Bag" />
      <div className="mb-5">
        <Link to="/products">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <ul className="flex-[4] flex flex-col border rounded justify-center">
          {cart.products.length > 0 &&
            cart.products?.map((product) => (
              <CartProduct key={product._id} product={product} />
            ))}

          {cart.products.length < 1 && (
            <h3 className="text-center text-3xl font-bold text-transparent text-gray-900 sm:2xl border-primary title-font md:text-4xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text">
              No Product Added Yet!!
            </h3>
          )}
        </ul>

        <div className="flex-[1]">
          <div className="md:p-5 p-1 space-y-2 border rounded-md">
            <h4 className="text-2xl font-medium text-gray-700">
              Order Summary
            </h4>

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$ {cart.total.toFixed(2)}</span>
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
              <span>$ {cart.total.toFixed(2)}</span>
            </div>

            <div>
              {cart.products.length < 1 ? (
                <div className="w-full cursor-not-allowed">
                  <Button disabled className="w-full cursor-not-allowed">
                    Checkout Now
                  </Button>
                </div>
              ) : (
                <Link to={`/checkout`} className="w-full">
                  <Button className="w-full">Checkout Now</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;

type CartProductProps = {
  product: TProduct;
};

const CartProduct = ({ product }: CartProductProps) => {
  const dispatch = useAppDispatch();

  const handleIncrement = (id: string) => {
    if (id) {
      dispatch(incrementQuantity(id));
    }
  };

  const handleDecrement = (id: string) => {
    if (id) {
      dispatch(decrementQuantity(id));
    }
  };

  const handleRemoveProduct = (id: string) => {
    if (id) {
      dispatch(removeFromCart(id));
    }
  };

  return (
    <li className="flex flex-col md:flex-row items-center justify-between h-full gap-10 border-b">
      <div className="">
        <img
          className="md:w-[200px] w-full h-[200px] object-cover rounded"
          src={product.image ? product.image : 'https://shorturl.at/on5kh'}
          alt={product.title}
        />
      </div>

      <div className="flex flex-col flex-1 gap-4">
        <h4 className="md:text-3xl text-xl font-medium">
          {product.title}
        </h4>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleDecrement(product._id)}
            className="text-2xl"
          >
            -
          </button>
          <span className="flex items-center justify-center w-10 h-10 border">
            {product.quantity || 1}
          </span>
          <button
            onClick={() => handleIncrement(product._id)}
            className="text-2xl"
          >
            +
          </button>
        </div>
        <div className="md:text-3xl text-xl text-gray-700">
          $ {(product.price * (product.quantity ?? 1)).toFixed(2)}
        </div>
      </div>

      <div className="w-full md:w-auto">
        <Button
          className="w-full md:w-auto md:mr-20 mr-1"
          onClick={() => handleRemoveProduct(product._id)}
        >
          Remove
        </Button>
      </div>
    </li>
  );
};
