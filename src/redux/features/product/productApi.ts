import { baseApi } from '@/redux/api/baseApi';

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
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

      keepUnusedDataFor: 0,
      providesTags: ['products'],
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

    // CREATE ONE
    createProduct: builder.mutation({
      query: (data) => {
        return {
          url: '/products',
          method: 'POST',
          body: data,
        };
      },
      invalidatesTags: ['products'],
    }),

    // DELETE ONE
    deleteProduct: builder.mutation({
      query: (id) => {
        return {
          url: `/products/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['products'],
    }),

    // UPDATE ONE
    updateProduct: builder.mutation({
      query: (options) => {
        // console.log(options);
        return {
          url: `/products/${options.id}`,
          method: 'PATCH',
          body: options.data,
        };
      },
      invalidatesTags: ['products'],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = authApi;
