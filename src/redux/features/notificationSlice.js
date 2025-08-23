import baseApi from "../api/baseApi";

export const notificationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    allNotification: builder.query({
      query: ({ page, limit, total, totalPages,role}) => ({
        url: `/sub-admin/notifications/templates?page=${page}&limit=${limit}&total=${total}&totalPages=${totalPages}&role=${role}`,
        method: "GET",
      }),
      providesTags: ["Payment"],
    }),

     }),
});

export const { useAllNotificationQuery } = notificationApi;
