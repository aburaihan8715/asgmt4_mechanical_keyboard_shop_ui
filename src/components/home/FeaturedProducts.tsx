import { Link } from 'react-router-dom';
import ProductsCard from '../products/ProductsCard';
import { Button } from '../ui/button';
import SectionHeading from '../ui/SectionHeading';
// import { productsWithId } from '@/data/products';
import { useGetAllProductsQuery } from '@/redux/features/product/productApi';
import { TProduct } from '@/types';

const FeaturedProducts = () => {
  const { data } = useGetAllProductsQuery(undefined);
  return (
    <section className="px-10 py-20 border-b">
      <SectionHeading heading="Featured Products" />
      <div className="grid grid-cols-3 gap-10">
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
