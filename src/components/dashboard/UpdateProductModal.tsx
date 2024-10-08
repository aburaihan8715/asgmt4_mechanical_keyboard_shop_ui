import { FaPenToSquare } from 'react-icons/fa6';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import {
  useGetProductQuery,
  useUpdateProductMutation,
} from '@/redux/features/product/productApi';

const UpdateProductModal = ({ id }: { id: string }) => {
  const { data } = useGetProductQuery(id);
  const product = data?.data;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <FaPenToSquare className="text-xl text-primary" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">Edit Product</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <div className="max-h-[80vh] overflow-auto">
          <UpdateForm product={product} id={id} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProductModal;

import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';

type FormValues = {
  title: string;
  price: number;
  rating: number;
  availableQuantity: number;
  image: string;
  brand: string;
  description: string;
};

type TUpdateFormProps = {
  title: string;
  price: number;
  rating: number;
  availableQuantity: number;
  image: string;
  brand: string;
  description: string;
};

const UpdateForm = ({
  product,
  id,
}: {
  product: TUpdateFormProps;
  id: string;
}) => {
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const [updateProduct] = useUpdateProductMutation();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const updatedProductData = {
      title: data?.title || product.title,
      price: Number(data?.price || product.price),
      rating: Number(data?.rating || product.rating),
      availableQuantity: Number(
        data?.availableQuantity || product.availableQuantity
      ),
      image: data?.image || product.image,
      brand: data?.brand || product.brand,
      description: data?.description || product.description,
    };
    const toastId = toast.loading('Loading...');
    try {
      await updateProduct({
        id,
        data: updatedProductData,
      });
      toast.success('Product has been updated!', {
        id: toastId,
        duration: 2000,
      });
      reset();
    } catch (error) {
      toast.error('Something went wrong!', {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-5">
        <div className="grid grid-cols-2 md:gap-x-10 gap-x-1 gap-y-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="title">Title</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded outline-none"
              type="text"
              id="title"
              defaultValue={product?.title}
              placeholder="Enter title"
              {...register('title')}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="price">Price</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded outline-none"
              type="number"
              id="price"
              defaultValue={product?.price}
              placeholder="Enter price"
              {...register('price')}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="rating">Rating</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded outline-none"
              type="number"
              id="rating"
              defaultValue={product?.rating}
              placeholder="Enter rating (1-5)"
              {...register('rating')}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="availableQuantity">Quantity</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded outline-none"
              type="number"
              id="availableQuantity"
              defaultValue={product?.availableQuantity}
              placeholder="Enter quantity"
              {...register('availableQuantity')}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="image">Img Url</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded outline-none"
              type="url"
              id="image"
              defaultValue={product?.image}
              placeholder="Enter img URL"
              {...register('image')}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="brand">Brand</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded outline-none"
              type="text"
              id="brand"
              defaultValue={product?.brand}
              placeholder="Enter brand"
              {...register('brand')}
            />
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="description">Description</label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded outline-none"
              id="description"
              defaultValue={product?.description}
              placeholder="Enter description"
              {...register('description')}
            />
          </div>

          <div>
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
