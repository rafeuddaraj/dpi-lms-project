import { apiSlice } from "../apiSlice/apiSlice";

export const assignmentMarkApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAssignmentMark: builder.query({
            query: ({ studentId, id }) => `/assignmentMark?video_id=${id}&student_id=${studentId}`
        })
    })
})

export const { useGetAssignmentMarkQuery } = assignmentMarkApi



