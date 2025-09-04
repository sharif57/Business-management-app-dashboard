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

    // s/sub-admin/notifications/scheduled
    scheduledNotification: builder.query({
      query: ({ page, limit, total, totalPages}) => ({
        url: `/sub-admin/notifications/scheduled?page=${page}&limit=${limit}&total=${total}&totalPages=${totalPages}`,
        method: "GET",
      }),
      providesTags: ["Payment"],
    }),

    sendNotificationList: builder.query({
      query: ({ page, limit, total, totalPages}) => ({
        url: `/sub-admin/notifications/sent?page=${page}&limit=${limit}&total=${total}&totalPages=${totalPages}`,
        method: "GET",
      }),
      providesTags: ["Payment"],
    }),
    // /sub-admin/compromises

    compromisesNotification: builder.query({
      query: ({ page, limit, total, totalPages}) => ({
        url: `/sub-admin/compromises?page=${page}&limit=${limit}&total=${total}&totalPages=${totalPages}`,
        method: "GET",
      }),
      providesTags: ["Payment"],
    }),

    sendNotification: builder.mutation({
      query: (data) => ({
        url: "/sub-admin/notifications/send",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Payment"],
    }),


     }),
});

export const { useAllNotificationQuery , useScheduledNotificationQuery , useSendNotificationListQuery, useCompromisesNotificationQuery , useSendNotificationMutation } = notificationApi;
