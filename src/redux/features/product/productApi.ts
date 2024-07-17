import { baseApi } from '@/redux/api/baseApi';

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllProductsQuery } = authApi;
