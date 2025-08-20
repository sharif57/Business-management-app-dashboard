import baseApi from "../api/baseApi";


const influencerApi = baseApi.injectEndpoints({
    endpoints: (builder)=>({

        allInfluencer: builder.query({
            query: ({ page, limit, total, totalPages}) => ({
              url: `/sub-admin/influencers?page=${page}&limit=${limit}&total=${total}&totalPages=${totalPages}`,
              method: "GET",
            }),
            providesTags: ["Influencer"],
          }),

          pendingInfluencer: builder.query({
            query: ({ page, limit, total, totalPages}) => ({
              url: `/sub-admin/influencers/pending-influencers?page=${page}&limit=${limit}&total=${total}&totalPages=${totalPages}`,
              method: "GET",
            }),
            providesTags: ["Influencer"],
          }),

          influencerApprove: builder.mutation({
            query: ({data, id}) => ({
              url: `/sub-admin/influencers/${id}/approve`,
              method: "POST",
              body: data,
            }),
            invalidatesTags: ["Influencer"],
          }),

          influencerDecline: builder.mutation({
            query: ({data, id}) => ({
                // http://10.10.12.51:3929/api/v1/sub-admin/influencers/6891d729bb7ca0dd9e073a36/decline
              url: `/sub-admin/influencers/${id}/decline`,
              method: "POST",
              body: data,
            }),
            invalidatesTags: ["Influencer"],
          }),

          assignTask: builder.mutation({
            query: ({data, id}) => ({
              // /sub-admin/campaigns/:campaignId/create-task
              url: `/sub-admin/campaigns/${id}/create-task`,
              method: "POST",
              body: data,
            }),
            invalidatesTags: ["Influencer"],
          }),

    })

})

export const {
    useAllInfluencerQuery,
    usePendingInfluencerQuery,
    useInfluencerApproveMutation,
    useInfluencerDeclineMutation,
    useAssignTaskMutation
} = influencerApi