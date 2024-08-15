import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/ui/SectionHeading';
import { useCreateProductMutation } from '@/redux/features/product/productApi';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormValues = {
  title: string;
  price: number;
  rating: number;
  availableQuantity: number;
  image: string;
  brand: string;
  description: string;
};

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
  });

  const [createProduct] = useCreateProductMutation();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    // console.log(data);
    await createProduct(data);
    reset();
  };

  return (
    <section className="">
      <SectionHeading heading="Add Product" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="px-20 space-y-5">
          <div className="grid grid-cols-2 gap-x-10 gap-y-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="title">Title</label>
              <input
                className={`w-full px-3 py-2 border rounded outline-none ${
                  errors.title ? 'border-red-500' : 'border-gray-300'
                }`}
                type="text"
                id="title"
                placeholder="Enter title"
                {...register('title', { required: 'Title is required' })}
              />
              {errors.title && (
                <p className="text-sm text-red-500">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="price">Price</label>
              <input
                className={`w-full px-3 py-2 border rounded outline-none ${
                  errors.price ? 'border-red-500' : 'border-gray-300'
                }`}
                type="number"
                id="price"
                placeholder="Enter price"
                {...register('price', {
                  required: 'Price is required',
                  valueAsNumber: true,
                })}
              />
              {errors.price && (
                <p className="text-sm text-red-500">
                  {errors.price.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="rating">Rating</label>
              <input
                className={`w-full px-3 py-2 border rounded outline-none ${
                  errors.rating ? 'border-red-500' : 'border-gray-300'
                }`}
                type="number"
                id="rating"
                placeholder="Enter rating (1-5)"
                {...register('rating', {
                  required: 'Rating is required',
                  min: { value: 1, message: 'Rating must be at least 1' },
                  max: { value: 5, message: 'Rating must be at most 5' },
                  valueAsNumber: true,
                })}
              />
              {errors.rating && (
                <p className="text-sm text-red-500">
                  {errors.rating.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="availableQuantity">Available Quantity</label>
              <input
                className={`w-full px-3 py-2 border rounded outline-none ${
                  errors.availableQuantity
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
                type="number"
                id="availableQuantity"
                placeholder="Enter quantity"
                {...register('availableQuantity', {
                  required: 'Available quantity is required',
                  valueAsNumber: true,
                })}
              />
              {errors.availableQuantity && (
                <p className="text-sm text-red-500">
                  {errors.availableQuantity.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="image">Img Url</label>
              <input
                className={`w-full px-3 py-2 border rounded outline-none ${
                  errors.image ? 'border-red-500' : 'border-gray-300'
                }`}
                type="url"
                id="image"
                placeholder="Enter img URL"
                {...register('image', {
                  required: 'Image URL is required',
                })}
              />
              {errors.image && (
                <p className="text-sm text-red-500">
                  {errors.image.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="brand">Brand</label>
              <input
                className={`w-full px-3 py-2 border rounded outline-none ${
                  errors.brand ? 'border-red-500' : 'border-gray-300'
                }`}
                type="text"
                id="brand"
                placeholder="Enter brand"
                {...register('brand', {
                  required: 'Brand is required',
                })}
              />
              {errors.brand && (
                <p className="text-sm text-red-500">
                  {errors.brand.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="description">Description</label>
              <textarea
                className={`w-full px-3 py-2 border rounded outline-none ${
                  errors.description ? 'border-red-500' : 'border-gray-300'
                }`}
                id="description"
                placeholder="Enter description"
                {...register('description', {
                  required: 'Description is required',
                })}
              />
              {errors.description && (
                <p className="text-sm text-red-500">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div className="">
              <Button className="w-full" type="submit">
                Add Product
              </Button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddProduct;
