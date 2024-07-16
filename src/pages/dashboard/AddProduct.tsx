import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/ui/SectionHeading';

const AddProduct = () => {
  return (
    <section className="">
      <SectionHeading heading="Add Product" />
      <form>
        <div className=" space-y-5  px-20">
          <div className="grid grid-cols-2 gap-x-10 gap-y-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                className="w-full px-3 py-2 border rounded outline-none"
                type="text"
                name="name"
                id="name"
                placeholder="Enter name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="price">Price</label>
              <input
                className="w-full px-3 py-2 border rounded outline-none"
                type="number"
                name="price"
                id="price"
                placeholder="Enter price"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name">Rating</label>
              <input
                className="w-full px-3 py-2 border rounded outline-none"
                type="number"
                name="rating"
                id="rating"
                max={`5`}
                min={`0`}
                placeholder="Enter rating(1-5)"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="quantity">Quantity</label>
              <input
                className="w-full px-3 py-2 border rounded outline-none"
                type="number"
                name="quantity"
                id="quantity"
                placeholder="Enter quantity"
              />
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="image">Img Url</label>
              <input
                className="w-full px-3 py-2 border rounded outline-none"
                type="string"
                name="image"
                id="image"
                placeholder="Enter img URL"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="description">Description</label>
              <textarea
                className="w-full px-3 py-2 border rounded outline-none"
                name="description"
                id="description"
                placeholder="Enter description"
              />
            </div>

            <div className="">
              <Button className="w-full">Place Order</Button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddProduct;
