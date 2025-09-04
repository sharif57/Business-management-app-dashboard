// analyticApi.js
import baseApi from "../api/baseApi";

export const conditionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    
privacyGet: builder.query({
  query: () => ({
    url: "/context-pages/privacy-policy",
    method: "GET",
  }),
  providesTags: ["Privacy"],
}),
    

  }),
});

export const { usePrivacyGetQuery } = conditionApi;