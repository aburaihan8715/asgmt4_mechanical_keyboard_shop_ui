import { Link } from 'react-router-dom';
import ProductsCard from '../products/ProductsCard';
import { Button } from '../ui/button';
import SectionHeading from '../ui/SectionHeading';
// import { productsWithId } from '@/data/products';
import { useGetAllProductsQuery } from '@/redux/features/product/productApi';
import { TProduct } from '@/types';
import LoadingSpinner from '../ui/LoadingSpinner';

const FeaturedProducts = () => {
  const { data, isLoading } = useGetAllProductsQuery({});

  return (
    <section className="px-1 py-10 border-b md:px-10 md:py-20">
      <SectionHeading heading="Featured Products" />
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {isLoading && <LoadingSpinner />}
        {data?.data?.slice(0, 6).map((item: TProduct) => (
          <ProductsCard key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <Link to="/products">
          <Button variant={'outline'}>See More...</Button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProducts;
