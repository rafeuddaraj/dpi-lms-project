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
            })
        })
    })
})

export const { useGetAssignmentMarkQuery, useSubmitAssignmentMutation, useGetAssignmentsMarksQuery } = assignmentMarkApi



