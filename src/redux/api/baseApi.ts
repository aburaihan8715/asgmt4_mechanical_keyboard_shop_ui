import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://mechanical-keyboard-theta.vercel.app/api',
  }),
  tagTypes: ['products'],
  endpoints: () => ({}),
});
