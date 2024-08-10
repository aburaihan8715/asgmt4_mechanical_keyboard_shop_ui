import ProductsCard from '@/components/products/ProductsCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import SectionHeading from '@/components/ui/SectionHeading';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useGetAllProductsQuery } from '@/redux/features/product/productApi';
import { TProduct } from '@/types';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

const Products = () => {
  const [search, setSearch] = useState('');

  const debounced = useDebouncedCallback((value) => {
    setSearch(value);
  }, 1000);

  const [filterByPriceRange, setFilterByPriceRange] = useState('');
  const [sortByPrice, setSortByPrice] = useState('');
  const [minPrice, maxPrice] = filterByPriceRange.split('-');

  const { data } = useGetAllProductsQuery({
    search,
    minPrice,
    maxPrice,
    sortByPrice,
  });

  const handleClearFilter = () => {
    setSearch('');
    setSortByPrice('');
    setFilterByPriceRange('');
  };
  return (
    <section className="py-20">
      <SectionHeading heading="All Products" />
      <div className="flex justify-between gap-10 px-10 mb-5">
        <div className="flex-1">
          <Input
            onChange={(e) => debounced(e.target.value)}
            type="search"
            name="search"
            id="search"
            placeholder="Search by brand and name..."
          />
        </div>
        <div className="flex-1">
          <Select
            value={filterByPriceRange}
            onValueChange={setFilterByPriceRange}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select price range" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Price</SelectLabel>
                <SelectItem value="1-100">(1-100)</SelectItem>
                <SelectItem value="100-150">(100-150)</SelectItem>
                <SelectItem value="100-200">(100-200)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1">
          <Select value={sortByPrice} onValueChange={setSortByPrice}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select price" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Price</SelectLabel>
                <SelectItem value="-price">High Price</SelectItem>
                <SelectItem value="price">Low Price</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Button onClick={handleClearFilter}>Clear filter</Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-10 px-10">
        {data?.data?.map((item: TProduct) => (
          <ProductsCard key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Products;
