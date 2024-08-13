import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/ui/SectionHeading';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { TProduct } from '@/types';
import {
  decrementQuantity,
  incrementQuantity,
  removeProduct,
} from '@/redux/features/cart/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cart = useAppSelector((state) => state.cart);

  return (
    <section className="px-10 py-20">
      <SectionHeading heading="Your Bag" />
      <div className="mb-5">
        <Link to="/products">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
      <div className="flex gap-4">
        <ul className="flex-[4] flex flex-col border rounded justify-center">
          {cart.products.length > 0 &&
            cart.products?.map((product) => (
              <CartProduct key={product._id} product={product} />
            ))}

          {cart.products.length < 1 && (
            <h3 className="w-full text-3xl font-semibold text-center">
              No Product Added Yet!!
            </h3>
          )}
        </ul>

        <div className="flex-[1]">
          <div className="p-5 space-y-2 border rounded-md">
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
      dispatch(removeProduct(id));
    }
  };

  return (
    <li className="flex items-center justify-between h-full gap-10 p-5 border-b">
      <div className="">
        <img
          className="w-[200px] h-[200px] object-cover rounded"
          src={product.image ? product.image : 'https://shorturl.at/on5kh'}
          alt={product.title}
        />
      </div>

      <div className="flex flex-col flex-1 gap-4">
        <h4 className="text-3xl font-medium">{product.title}</h4>
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
        <div className="text-3xl text-gray-700">
          $ {(product.price * (product.quantity ?? 1)).toFixed(2)}
        </div>
      </div>

      <div>
        <Button onClick={() => handleRemoveProduct(product._id)}>
          Remove
        </Button>
      </div>
    </li>
  );
};
