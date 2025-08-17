import baseApi from "../api/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    userProfile: builder.query({
      query: () => ({
        url: "/profile",
        method: "GET",
      }),
      providesTags: ["User"],
    }),

    userList: builder.query({
      query: () => ({
        url: "/auth/user_details/",
        method: "GET",
      }),
      providesTags: ["User"],
    }),

    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/profile/edit",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

 

  }),
});

export const {useUserProfileQuery, useUserListQuery, useUpdateProfileMutation} = userApi;
