import { baseApi } from '@/redux/api/baseApi';

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (orderData) => ({
        url: '/api/v1/orders',
        method: 'POST',
        body: orderData,
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;
