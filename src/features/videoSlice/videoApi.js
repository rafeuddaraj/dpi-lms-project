import { apiSlice } from "../apiSlice/apiSlice";

export const quizSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getVideos: builder.query({
            query: () => `/videos`
        }),
        getVideo: builder.query({
            query: (id) => `/videos/${id}`
        }),
    })
})

export const { useGetVideoQuery, useGetVideosQuery } = quizSlice