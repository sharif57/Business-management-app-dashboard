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

  }),
});

export const { useAllCampaignQuery} = campaignApi;
