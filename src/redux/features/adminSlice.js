import baseApi from "../api/baseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({


    createAdmin: builder.mutation({
      query: (data) => ({
        url: "/admin/users/create-sub-admin",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),



    allUsers: builder.query({
      query: ({ page, limit, total, totalPages,role}) => ({
        url: `/admin/users?page=${page}&limit=${limit}&total=${total}&totalPages=${totalPages}&role=${role}`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),

  }),
});

export const { useCreateAdminMutation, useAllUsersQuery} = adminApi;
