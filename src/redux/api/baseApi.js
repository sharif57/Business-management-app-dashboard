import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://10.10.12.48:3929/api/v1',
    // http://10.10.12.51:3929/api/v1
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");

      // console.log("Current token:", token);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      // console.log("Prepared headers:", headers);
      return headers;
    },
  }),
  tagTypes: [
    "User",
    'Influencer',
    "Campaign",
    'Video',
    "Privacy",
    "Payment"
  ], // Added all necessary tags
  endpoints: () => ({}),
});

export default baseApi;
