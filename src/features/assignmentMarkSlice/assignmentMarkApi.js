import { apiSlice } from "../apiSlice/apiSlice";

export const assignmentMarkApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAssignmentsMarks: builder.query({
            query: () => `/assignmentMark`
        }),
        getAssignmentMark: builder.query({
            query: ({ studentId, id }) => `/assignmentMark?assignment_id=${id}&student_id=${studentId}`
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
        }),
        submitAssignmentMark: builder.mutation({
            query: ({ id, data }) => ({
                url: `/assignmentMark/${id}`,
                method: "PATCH",
                body: data

            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {

                try {
                    const assignmentMark = await queryFulfilled;
                    dispatch(assignmentMarkApi.util.updateQueryData('getAssignmentsMarks', undefined, draft => {
                        const index = draft.findIndex(assignment => Number(assignment.id) === arg.id)
                        draft[index] = assignmentMark?.data
                    }))
                } catch {
                    //
                }
            }
        })
    })
})

export const { useGetAssignmentMarkQuery, useSubmitAssignmentMutation, useGetAssignmentsMarksQuery, useSubmitAssignmentMarkMutation } = assignmentMarkApi



