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

updatePrivacy: builder.mutation({
  query: (data) => ({
    url: "/admin/context-pages/modify",
    method: "POST",
    body: data,
  }),
  invalidatesTags: ["Privacy"],
}),

termsGet: builder.query({
  query: () => ({
    url: "/context-pages/terms-condition",
    method: "GET",
  }),
  providesTags: ["Privacy"],
}),

updateTerms: builder.mutation({
  query: (data) => ({
    url: "/admin/context-pages/modify",
    method: "POST",
    body: data,
  }),
  invalidatesTags: ["Privacy"],
}),

    aboutUsGet: builder.query({
      query: () => ({
        url: "/context-pages/about-us",
        method: "GET",
      }),
      providesTags: ["Privacy"],
    }),
    
    updateAboutUs: builder.mutation({
      query: (data) => ({
        url: "/admin/context-pages/modify",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Privacy"],
    }),
    

  }),
});

export const { usePrivacyGetQuery , useUpdatePrivacyMutation , useTermsGetQuery , useUpdateTermsMutation , useAboutUsGetQuery , useUpdateAboutUsMutation } = conditionApi;