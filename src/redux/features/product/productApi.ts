import { baseApi } from '@/redux/api/baseApi';

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // GET ALL
    getAllProducts: builder.query({
      query: ({ minPrice, maxPrice, sortByPrice, search }) => {
        let queryString = `/products`;

        const params = new URLSearchParams();

        if (search) params.append('searchTerm', search);
        if (minPrice) params.append('price[gte]', minPrice);
        if (maxPrice) params.append('price[lte]', maxPrice);
        if (sortByPrice) params.append('sort', sortByPrice);

        if (params.toString()) queryString += `?${params.toString()}`;

        return {
          url: queryString,
          method: 'GET',
        };
      },
    }),

    // GET ONE
    getProduct: builder.query({
      query: (id) => {
        return {
          url: `/products/${id}`,
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductQuery } = authApi;
