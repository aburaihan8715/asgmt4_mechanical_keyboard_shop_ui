import { Button } from '@/components/ui/button';
import ErrorMessage from '@/components/ui/ErrorMessage';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { addToCart } from '@/redux/features/cart/cartSlice';
import { useGetProductQuery } from '@/redux/features/product/productApi';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { TProduct } from '@/types';
import { Rating } from '@smastrom/react-rating';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetProductQuery(id);
  const product = data?.data;
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.cart.products);

  const handleAddToCart = (product: TProduct) => {
    if (product.availableQuantity < 1)
      return alert('Product is not available!');

    const isAlreadyAdded = products.find(
      (item) => item._id === product._id
    );

    if (isAlreadyAdded) return alert('Product already added!');

    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  if (isLoading) return <LoadingSpinner />;
  if (isError)
    return (
      <ErrorMessage>
        <p className="text-center">Something went wrong!</p>
      </ErrorMessage>
    );

  return (
    <section className="md:h-[90vh] h-full md:px-10 px-1 md:py-20 py-10">
      <div className="flex flex-col md:flex-row h-full gap-10">
        <div className="flex-1 h-full">
          <img
            className="object-cover w-full h-full rounded"
            src={`${
              product.image ? product.image : 'https://shorturl.at/on5kh'
            }`}
            alt=""
          />
        </div>

        <div className="flex-[2] flex flex-col md:gap-5 gap-2">
          <h1 className="text-3xl font-medium text-[#212529]">
            {product?.title}
          </h1>
          <p>{product?.description}</p>

          <p className="text-3xl text-gray-700">
            $ {(product.price * (product.quantity ?? 1)).toFixed(2)}
          </p>

          <div>
            <span>
              <strong className="text-gray-700">Brand:</strong>{' '}
              {product?.brand}
            </span>
          </div>

          <div>
            <span>
              <strong className="text-gray-700">Stock:</strong>{' '}
              {product?.availableQuantity
                ? product?.availableQuantity
                : 'Out of Stock'}
            </span>
          </div>

          <div className="flex items-center gap-5">
            <Rating
              style={{ maxWidth: 100 }}
              value={product?.rating}
              readOnly
            />
            <span>{product?.rating}</span>
          </div>

          <div>
            <Button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
