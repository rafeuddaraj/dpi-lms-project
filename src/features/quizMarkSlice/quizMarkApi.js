import { apiSlice } from "../apiSlice/apiSlice";

export const quizMarkApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getQuizMark: builder.query({
            query: ({ id, studentId }) => `/quizMark?student_id=${studentId}&video_id=${id}`
        }),
        submitQuiz: builder.mutation({
            query: (data) => {
                return ({
                    url: `/quizMark`,
                    method: 'POST',
                    body: data
                })
            }
        })
    })
})

export const { useGetQuizMarkQuery, useSubmitQuizMutation } = quizMarkApi