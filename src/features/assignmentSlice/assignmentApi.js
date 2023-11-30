import { apiSlice } from "../apiSlice/apiSlice";

export const assignmentApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAssignments: builder.query({
            query: () => `/assignments`
        }),
        getAssignment: builder.query({
            query: (id) => `/assignments/${id}`
        }),
        updateAssignment: builder.mutation({
            query: ({ id, data }) => ({
                url: `/assignments/${id}`,
                method: "PATCH",
                body: data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const pathResult = dispatch(assignmentApi.util.updateQueryData('getAssignments', undefined, draft => {
                    const assignmentIndex = draft.findIndex(assignment => assignment.id === arg.id)
                    draft[assignmentIndex] = arg.data
                }))
                const pathResult2 = dispatch(assignmentApi.util.updateQueryData('getAssignment', arg.id, draft => {
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
        addAssignment: builder.mutation({
            query: (data) => ({
                url: `/assignments`,
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const assignment = await queryFulfilled
                    dispatch(assignmentApi.util.updateQueryData('getAssignments', undefined, draft => {
                        draft.push(assignment?.data)
                    }))
                } catch {
                    //
                }
            }

        }),

        deleteAssignment: builder.mutation({
            query: (id) => ({
                url: `/assignments/${id}`,
                method: "DELETE"
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const pathResult = dispatch(assignmentApi.util.updateQueryData('getAssignments', undefined, draft => {
                    const index = draft.findIndex(assignments => assignments.id === arg)
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

export const { useGetAssignmentQuery, useGetAssignmentsQuery, useDeleteAssignmentMutation, useAddAssignmentMutation, useUpdateAssignmentMutation } = assignmentApi



