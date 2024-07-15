import ProductsCard from '@/components/products/ProductsCard';
import SectionHeading from '@/components/ui/SectionHeading';
import { productData } from '@/data/products';

const Products = () => {
  return (
    <section className="py-20">
      <SectionHeading heading="All Products" />
      <div className="grid grid-cols-4 gap-10 px-10">
        {productData?.map((item) => (
          <ProductsCard key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Products;
