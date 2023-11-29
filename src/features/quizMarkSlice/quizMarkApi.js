import { apiSlice } from "../apiSlice/apiSlice";

export const quizMarkApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getQuizzesMarks: builder.query({
            query: () => `/quizMark?_limit=20`
        }),
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

export const { useGetQuizMarkQuery, useSubmitQuizMutation,useGetQuizzesMarksQuery } = quizMarkApi