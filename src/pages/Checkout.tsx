import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/ui/SectionHeading';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useCreateOrderMutation } from '@/redux/features/order/orderApi';
import { completedOrder } from '@/redux/features/cart/cartSlice';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';
import { toast } from 'sonner';

type FormData = {
  name: string;
  email: string;
  mobile: string;
  address: string;
};

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const cart = useAppSelector((state) => state.cart);
  const navigate = useNavigate();
  const [createOrder] = useCreateOrderMutation();
  const dispatch = useAppDispatch();
  const [paymentMethod, setPaymentMethod] = useState('');

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const toastId = toast.loading('Loading...');
    try {
      await createOrder({
        totalAmount: cart.total,
        totalQuantity: cart.quantity,
        products: cart.products.map((item) => ({
          productId: item._id,
          quantity: item.quantity,
        })),
        ...data,
      }).unwrap();

      dispatch(completedOrder());
      toast.success('Product has been created!', {
        id: toastId,
        duration: 2000,
      });

      navigate('/success');
    } catch (error) {
      toast.error('Something went wrong!', {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <section className="md:py-20 py-10 px-1">
      <SectionHeading heading="Payment" />

      <div className="flex justify-center">
        <Select value={paymentMethod} onValueChange={setPaymentMethod}>
          <SelectTrigger className="md:w-[180px] w-full">
            <SelectValue placeholder="Select Payment Method" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Payment</SelectLabel>
              <SelectItem value="cash-on-delivery">
                Cash on delivery
              </SelectItem>
              <SelectItem value="stripe">Stripe</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {paymentMethod === 'cash-on-delivery' && (
        <div className="md:flex justify-center mt-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4 md:w-96 w-full">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <input
                  className={`w-full px-3 py-2 border rounded outline-none ${
                    errors.name ? 'border-red-500' : ''
                  }`}
                  type="text"
                  id="name"
                  placeholder="Enter name"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input
                  className={`w-full px-3 py-2 border rounded outline-none ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                  type="email"
                  id="email"
                  placeholder="Enter email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value:
                        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: 'Enter a valid email address',
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="mobile">Mobile</label>
                <input
                  className={`w-full px-3 py-2 border rounded outline-none ${
                    errors.mobile ? 'border-red-500' : ''
                  }`}
                  type="tel"
                  id="mobile"
                  placeholder="Enter mobile number"
                  {...register('mobile', {
                    required: 'Mobile number is required',
                    pattern: {
                      value: /^(01[3-9])[0-9]{8}$/,
                      message: 'Enter a valid mobile number',
                    },
                  })}
                />
                {errors.mobile && (
                  <span className="text-sm text-red-500">
                    {errors.mobile.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="address">Address</label>
                <textarea
                  className={`w-full px-3 py-2 border rounded outline-none ${
                    errors.address ? 'border-red-500' : ''
                  }`}
                  id="address"
                  placeholder="Enter address"
                  {...register('address', {
                    required: 'Address is required',
                  })}
                />
                {errors.address && (
                  <span className="text-sm text-red-500">
                    {errors.address.message}
                  </span>
                )}
              </div>
              <div className="flex gap-4">
                <Button className="w-full" type="submit">
                  Place Order
                </Button>
              </div>
            </div>
          </form>
        </div>
      )}

      {paymentMethod === 'stripe' && (
        <div className="h-[40vh] flex justify-center items-center">
          <p className="text-center text-3xl font-bold text-transparent text-gray-900 sm:2xl border-primary title-font md:text-4xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text">
            Stripe Not Implemented Yet!!
          </p>
        </div>
      )}
    </section>
  );
};

export default Checkout;

// import { Button } from '@/components/ui/button';
// import SectionHeading from '@/components/ui/SectionHeading';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
// import { useAppDispatch, useAppSelector } from '@/redux/hooks';
// import { useCreateOrderMutation } from '@/redux/features/order/orderApi';
// import { completedOrder } from '@/redux/features/cart/cartSlice';
// import { useGetAllProductsQuery } from '@/redux/features/product/productApi';
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select';
// import { useState } from 'react';

// type FormData = {
//   name: string;
//   email: string;
//   mobile: string;
//   address: string;
// };

// const Checkout = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormData>();
//   const cart = useAppSelector((state) => state.cart);
//   const navigate = useNavigate();
//   const [createOrder] = useCreateOrderMutation();
//   const dispatch = useAppDispatch();
//   const [paymentMethod, setPaymentMethod] = useState('');

//   const { refetch } = useGetAllProductsQuery({});

//   const onSubmit: SubmitHandler<FormData> = async (data) => {
//     try {
//       await createOrder({
//         totalAmount: cart.total,
//         totalQuantity: cart.quantity,
//         products: cart.products.map((item) => ({
//           productId: item._id,
//           quantity: item.quantity,
//         })),
//         ...data,
//       }).unwrap();

//       await refetch();

//       dispatch(completedOrder());

//       navigate('/success');
//     } catch (error) {
//       console.error('Order creation failed:', error);
//     }
//   };

//   return (
//     <section className="py-20">
//       <SectionHeading heading="Payment" />

//       <div className="flex justify-center">
//         <Select value={paymentMethod} onValueChange={setPaymentMethod}>
//           <SelectTrigger className="w-[180px]">
//             <SelectValue placeholder="Select Payment Method" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectGroup>
//               <SelectLabel>Payment</SelectLabel>
//               <SelectItem value="cash-on-delivery">
//                 Cash on delivery
//               </SelectItem>
//               <SelectItem value="stripe">Stripe</SelectItem>
//             </SelectGroup>
//           </SelectContent>
//         </Select>
//       </div>

//       {paymentMethod === 'cash-on-delivery' && (
//         <div className="flex justify-center mt-10">
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="space-y-4 w-96">
//               <div className="flex flex-col gap-2">
//                 <label htmlFor="name">Name</label>
//                 <input
//                   className={`w-full px-3 py-2 border rounded outline-none ${
//                     errors.name ? 'border-red-500' : ''
//                   }`}
//                   type="text"
//                   id="name"
//                   placeholder="Enter name"
//                   {...register('name', { required: 'Name is required' })}
//                 />
//                 {errors.name && (
//                   <span className="text-sm text-red-500">
//                     {errors.name.message}
//                   </span>
//                 )}
//               </div>

//               <div className="flex flex-col gap-2">
//                 <label htmlFor="email">Email</label>
//                 <input
//                   className={`w-full px-3 py-2 border rounded outline-none ${
//                     errors.name ? 'border-red-500' : ''
//                   }`}
//                   type="email"
//                   id="email"
//                   placeholder="Enter email"
//                   {...register('email', {
//                     required: 'Email is required',
//                     pattern: {
//                       value:
//                         /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//                       message: 'Enter a valid email address',
//                     },
//                   })}
//                 />
//                 {errors.email && (
//                   <span className="text-sm text-red-500">
//                     {errors.email.message}
//                   </span>
//                 )}
//               </div>

//               <div className="flex flex-col gap-2">
//                 <label htmlFor="mobile">Mobile</label>
//                 <input
//                   className={`w-full px-3 py-2 border rounded outline-none ${
//                     errors.name ? 'border-red-500' : ''
//                   }`}
//                   type="tel"
//                   id="mobile"
//                   placeholder="Enter mobile number"
//                   {...register('mobile', {
//                     required: 'Mobile number is required',
//                     pattern: {
//                       value: /^(01[3-9])[0-9]{8}$/,
//                       message: 'Enter a valid mobile number',
//                     },
//                   })}
//                 />
//                 {errors.mobile && (
//                   <span className="text-sm text-red-500">
//                     {errors.mobile.message}
//                   </span>
//                 )}
//               </div>

//               <div className="flex flex-col gap-2">
//                 <label htmlFor="address">Address</label>
//                 <textarea
//                   className={`w-full px-3 py-2 border rounded outline-none ${
//                     errors.name ? 'border-red-500' : ''
//                   }`}
//                   id="address"
//                   placeholder="Enter address"
//                   {...register('address', {
//                     required: 'Address is required',
//                   })}
//                 />
//                 {errors.address && (
//                   <span className="text-sm text-red-500">
//                     {errors.address.message}
//                   </span>
//                 )}
//               </div>
//               <div className="flex gap-4">
//                 <Button className="w-full" type="submit">
//                   Place Order
//                 </Button>
//               </div>
//             </div>
//           </form>
//         </div>
//       )}

//       {paymentMethod === 'stripe' && (
//         <div className="h-[40vh] flex justify-center items-center">
//           <p className="text-4xl font-medium text-green-400">
//             Stripe Not Implemented Yet!!
//           </p>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Checkout;
