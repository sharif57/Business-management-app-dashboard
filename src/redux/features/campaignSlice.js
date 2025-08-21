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

    updateCampaign: builder.mutation({
      query: ({ data, id }) => ({
        url: `/sub-admin/campaigns/${id}/edit`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Campaign"],
    }),

    deleteCampaign: builder.mutation({
      query: (id) => ({
        url: `/sub-admin/campaigns/${id}/delete`,
        method: "DELETE",
      }),
      invalidatesTags: ["Campaign"],
    }),

  }),
});

export const { useAllCampaignQuery, useCreateCampaignMutation, useUpdateCampaignMutation, useDeleteCampaignMutation} = campaignApi;
