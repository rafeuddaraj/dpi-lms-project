import { apiSlice } from "../apiSlice/apiSlice";

export const quizApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getQuizzes: builder.query({
            query: () => `/quizzes`
        }),
        getQuiz: builder.query({
            query: (id) => `/quizzes?video_id_like=${id}`
        }),
        updateQuiz: builder.mutation({
            query: ({ id, data }) => ({
                url: `/quizzes/${id}`,
                method: "PATCH",
                body: data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const pathResult = dispatch(quizApi.util.updateQueryData('getQuizzes', undefined, draft => {
                    const videoIndex = draft.findIndex(quiz => quiz.id === arg.id)
                    draft[videoIndex] = arg.data
                }))
                const pathResult2 = dispatch(quizApi.util.updateQueryData('getQuiz', arg.id, draft => {
                    Object.assign(draft, arg.data)
                }))
                try {
                    await queryFulfilled
                } catch {
                    pathResult.undo()
                    pathResult2.undo()
                }
            }

        }),
        addQuiz: builder.mutation({
            query: (data) => ({
                url: `/quizzes`,
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const quiz = await queryFulfilled
                    dispatch(quizApi.util.updateQueryData('getQuizzes', undefined, draft => {
                        draft.push(quiz?.data)
                    }))
                } catch {
                    //
                }
            }

        }),

        deleteQuiz: builder.mutation({
            query: (id) => ({
                url: `/quizzes/${id}`,
                method: "DELETE"
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const pathResult = dispatch(quizApi.util.updateQueryData('getQuizzes', undefined, draft => {
                    const index = draft.findIndex(quiz => quiz.id === arg)
                    console.log(JSON.stringify(draft));
                    draft.splice(index, 1)
                }))
                try {
                    await queryFulfilled
                } catch {
                    pathResult.undo()
                }
            }
        })

    })
})

export const { useGetQuizQuery, useAddQuizMutation, useDeleteQuizMutation, useGetQuizzesQuery, useUpdateQuizMutation } = quizApi