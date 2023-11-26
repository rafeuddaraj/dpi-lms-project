import { apiSlice } from "../apiSlice/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        adminLogin: builder.mutation({
            query: (data) => ({
                url: '/login',
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const data = await queryFulfilled
                    const user = data?.data
                    localStorage.setItem('lmsAuthAdmin', JSON.stringify(user))
                    dispatch(userLoggedIn(user))
                } catch {
                    //
                }
            }
        }),
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
                    localStorage.setItem('lmsAuth', JSON.stringify(user))
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
                    localStorage.setItem('lmsAuth', JSON.stringify(user))
                    dispatch(userLoggedIn(user))
                } catch {
                    //
                }
            }
        }),
    })
})

export const { useLoginMutation, useRegisterMutation } = authApi