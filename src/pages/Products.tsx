import ProductsCard from '@/components/products/ProductsCard';
import { Button } from '@/components/ui/button';
import ErrorMessage from '@/components/ui/ErrorMessage';
import { Input } from '@/components/ui/input';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
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

  const { data, isLoading, isError } = useGetAllProductsQuery({
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

  if (isLoading) return <LoadingSpinner />;
  if (isError)
    return (
      <ErrorMessage>
        <div className="flex justify-center items-center h-[50vh]">
          Something went wrong!
        </div>
      </ErrorMessage>
    );

  return (
    <section className="md:py-20 py-10">
      <SectionHeading heading="All Products" />
      <div className=" flex flex-col md:flex-row justify-between gap-4 md:gap-10 md:px-10 px-2 mb-5">
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
            <SelectTrigger className="md:w-[180px] w-full">
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
            <SelectTrigger className="md:w-[180px] w-full">
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
          <Button className="md:w-auto w-full" onClick={handleClearFilter}>
            Clear filter
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-1 md:px-10">
        {data?.data?.map((item: TProduct) => (
          <ProductsCard key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Products;
