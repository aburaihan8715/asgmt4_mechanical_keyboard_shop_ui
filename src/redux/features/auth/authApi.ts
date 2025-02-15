import { baseApi } from '@/redux/api/baseApi';

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (registerData) => ({
        url: '/api/v1/auth/register',
        method: 'POST',
        body: registerData,
      }),
    }),

    login: builder.mutation({
      query: (loginData) => ({
        url: '/api/v1/auth/login',
        method: 'POST',
        body: loginData,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
