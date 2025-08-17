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

    })

})

export const {
    useAllInfluencerQuery,
    usePendingInfluencerQuery
} = influencerApi