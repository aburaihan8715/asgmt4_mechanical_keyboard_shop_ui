import ProductsCard from '@/components/products/ProductsCard';
import SectionHeading from '@/components/ui/SectionHeading';
// import { productsWithId } from '@/data/products';
import { useGetAllProductsQuery } from '@/redux/features/product/productApi';
import { TProduct } from '@/types';

const Products = () => {
  const { data } = useGetAllProductsQuery(undefined);
  // console.log(data.data);
  return (
    <section className="py-20">
      <SectionHeading heading="All Products" />
      <div className="grid grid-cols-4 gap-10 px-10">
        {data?.data?.map((item: TProduct) => (
          <ProductsCard key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Products;
