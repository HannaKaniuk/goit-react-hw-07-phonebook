import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://65b5169441db5efd28674709.mockapi.io/',
  }),
  tagTypes: ['contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({ method: 'GET', url: 'contacts' }),
      providesTags: ['contacts'],
    }),
    addContact: builder.mutation({
      query: newContact => ({
        method: 'POST',
        url: 'contacts',
        body: newContact,
      }),
      invalidatesTags: ['contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        method: 'DELETE',
        url: `contacts/${id}`,
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
});
export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
