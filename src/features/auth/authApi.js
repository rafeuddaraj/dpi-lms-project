import { apiSlice } from "../apiSlice/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: (data) => ({
                url: '/login',
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const data = await queryFulfilled
                    const user = data?.data
                    const accessToken = user?.accessToken
                    localStorage.setItem('auth', accessToken)
                    dispatch(userLoggedIn(user))
                } catch {
                    //
                }
            }
        }),
        register: builder.mutation({
            query: (data) => ({
                url: '/register',
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const data = await queryFulfilled
                    const user = data?.data
                    const accessToken = user?.accessToken
                    localStorage.setItem('auth', accessToken)
                    dispatch(userLoggedIn(user))
                } catch {
                    //
                }
            }
        }),
    })
})

export const { useLoginMutation, useRegisterMutation } = authApi