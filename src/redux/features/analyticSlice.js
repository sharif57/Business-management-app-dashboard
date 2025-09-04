// analyticApi.js
import baseApi from "../api/baseApi";

export const analyticApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    analyticsList: builder.query({
      query: ({ status, page = 1, limit = 10 }) => ({
        url: `/admin/campaigns/analytics?status=${status}&page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["Analytics"],
    }),
  }),
});

export const { useAnalyticsListQuery } = analyticApi;