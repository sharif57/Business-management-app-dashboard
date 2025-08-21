import baseApi from "../api/baseApi";

export const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    allPaymentHistory: builder.query({
      query: ({ page, limit, total, totalPages,role}) => ({
        url: `/sub-admin/payments?page=${page}&limit=${limit}&total=${total}&totalPages=${totalPages}&role=${role}`,
        method: "GET",
      }),
      providesTags: ["Payment"],
    }),

     }),
});

export const { useAllPaymentHistoryQuery} = paymentApi;
