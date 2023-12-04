import { apiSlice } from '../apiSlice/apiSlice'

export const supportsApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getSupports: builder.query({
            query: () => `/supports`
        }),
        getSupport: builder.query({
            query: (id) => `/supports/${id}`
        }),
        deleteSupport: builder.mutation({
            query: (id) => ({
                url: `/supports/${id}`,
                method: "DELETE",
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const pathResult = dispatch(supportsApi.util.updateQueryData('getSupports', undefined, (draft) => {
                    const supportIndex = draft.findIndex(support => support.id == arg)
                    draft.splice(supportIndex, 1)
                }))
                try {
                    const support = await queryFulfilled;

                } catch {
                    pathResult.undo()
                }
            }
        }),
        updateSupport: builder.mutation({
            query: ({ id, data }) => ({
                url: `/supports/${id}`,
                method: "PATCH",
                body: data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const support = await queryFulfilled;
                    dispatch(supportsApi.util.updateQueryData('getSupports', undefined, (draft) => {
                        const supportIndex = draft.findIndex(support => support.id == arg.id)
                        draft[supportIndex] = support.data
                    }))
                } catch {
                    //
                }
            }
        }),
        addSupport: builder.mutation({
            query: (data) => ({
                url: '/supports',
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const support = await queryFulfilled;
                    dispatch(supportsApi.util.updateQueryData('getSupports', undefined, (draft) => {
                        draft.push(support.data)
                    }))
                } catch {
                    //
                }
            }
        })
    })
})

export const { useGetSupportsQuery, useAddSupportMutation, useGetSupportQuery, useDeleteSupportMutation, useUpdateSupportMutation } = supportsApi