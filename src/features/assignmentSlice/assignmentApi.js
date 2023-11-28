import { apiSlice } from "../apiSlice/apiSlice";

export const assignmentApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAssignment: builder.query({
            query: (id) => `/assignments?video_id_like=${id}`
        })
    })
})

export const { useGetAssignmentQuery } = assignmentApi



