
import baseApi from "../api/baseApi";


export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["User"],
    }),

    changePassword: builder.mutation({
      query: (data) => ({
        url: "/auth/change-password",
        method: "POST",
        body: data,
      }),
    }),

      forgotPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/reset-password-otp-send",
        method: "POST",
        body: data,
      }),
    }),

    verifyEmail: builder.mutation({
      query: (data) => ({
        url: "/auth/reset-password-otp-verify",
        method: "POST",
        body: data,
      }),
    }),

    resetPassword: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/reset-password",
          method: "POST",
          body: data,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("resetToken")}`,
          },
        };
      },
    }),

    googleLogin: builder.mutation({
      query: (data) => ({
        url: "/auth/google_login/",
        method: "POST",
        body: data,
      }),
    }),

    facebookLogin: builder.mutation({
      query: ({ accessToken }) => ({
        url: "/auth/login/facebook",
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useChangePasswordMutation,
  useForgotPasswordMutation,
  useVerifyEmailMutation,
  useResetPasswordMutation,
  useGoogleLoginMutation,
  useFacebookLoginMutation,
} = authApi;
