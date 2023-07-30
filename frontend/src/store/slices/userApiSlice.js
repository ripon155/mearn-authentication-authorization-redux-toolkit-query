import { apiSlice } from './apiSlice';

const USERS_URL = '/api/users';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: 'POST',
        body: data
      })
    })
  })
});

console.log(userApiSlice);

export const { useLoginMutation } = userApiSlice;
