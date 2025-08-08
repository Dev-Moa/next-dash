import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export interface Order {
  product_id: number,
  name: string;
  price: number;
}


export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fake-store-api.mock.beeceptor.com/api' }),
  tagTypes: ['Orders'],
  endpoints: (builder) => ({
    getOrders: builder.query<Order[], void>({
      query: () => '/products',
      providesTags: ['Orders'],
      keepUnusedDataFor:60
    }),
  }),
});

export const { useGetOrdersQuery } = ordersApi;

