import baseApi from "../api/baseApi";

export const campaignApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    allCampaign: builder.query({
      query: ({ page, limit, total, totalPages,role}) => ({
        url: `/sub-admin/campaigns?page=${page}&limit=${limit}&total=${total}&totalPages=${totalPages}&role=${role}`,
        method: "GET",
      }),
      providesTags: ["Campaign"],
    }),

    createCampaign: builder.mutation({
      query: (data) => ({
        url: "/sub-admin/campaigns/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Campaign"],
    }),

  }),
});

export const { useAllCampaignQuery, useCreateCampaignMutation} = campaignApi;
