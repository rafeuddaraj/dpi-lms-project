import { apiSlice } from "../apiSlice/apiSlice";

export const assignmentMarkApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAssignmentsMarks: builder.query({
            query: () => `/assignmentMark?_limit=20?status=published`
        }),
        getAssignmentMark: builder.query({
            query: ({ studentId, id }) => `/assignmentMark?video_id=${id}&student_id=${studentId}`
        }),
        submitAssignment: builder.mutation({
            query: (data) => ({
                url: `/assignmentMark`,
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const pathResult1 = dispatch(apiSlice.util.updateQueryData('getAssignmentMark', { studentId: arg.student_id, id: arg.video_id }, draft => {
                    draft.push(arg)
                }))
                const pathResult2 = dispatch(apiSlice.util.updateQueryData('getAssignmentsMarks', undefined, draft => {
                    draft.push(arg)
                }))

                try {
                    await queryFulfilled
                } catch {
                    pathResult1.undo()
                    pathResult2.undo()
                }
            }
        })
    })
})

export const { useGetAssignmentMarkQuery, useSubmitAssignmentMutation, useGetAssignmentsMarksQuery } = assignmentMarkApi



