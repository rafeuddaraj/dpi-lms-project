import { apiSlice } from "../apiSlice/apiSlice";

export const quizApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getQuiz: builder.query({
            query: (id) => `/quizzes?video_id_like=${id}`
        })
    })
})

export const { useGetQuizQuery } = quizApi