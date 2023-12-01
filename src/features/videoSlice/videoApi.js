import { apiSlice } from "../apiSlice/apiSlice";

export const VideoSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getVideos: builder.query({
            query: () => `/videos`
        }),
        getVideo: builder.query({
            query: (id) => `/videos/${id}`
        }),
        updateVideo: builder.mutation({
            query: ({ id, data }) => ({
                url: `/videos/${id}`,
                method: "PATCH",
                body: data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const pathResult = dispatch(VideoSlice.util.updateQueryData('getVideos', undefined, draft => {
                    const videoIndex = draft.findIndex(video => video.id === arg.id)
                    draft[videoIndex] = arg.data
                }))
                const pathResult2 = dispatch(VideoSlice.util.updateQueryData('getVideo', arg.id, draft => {
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
        addVideo: builder.mutation({
            query: (data) => ({
                url: `/videos`,
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                // const pathResult = 
                try {
                    const video = await queryFulfilled
                    dispatch(VideoSlice.util.updateQueryData('getVideos', undefined, draft => {
                        draft.push(video?.data)
                    }))
                } catch {
                    //
                }
            }

        }),

        deleteVideo: builder.mutation({
            query: (id) => ({
                url: `/videos/${id}`,
                method: "DELETE"
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const pathResult = dispatch(VideoSlice.util.updateQueryData('getVideos', undefined, draft => {
                    const index = draft.findIndex(video => video.id === arg)
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

export const { useGetVideoQuery, useGetVideosQuery, useUpdateVideoMutation, useAddVideoMutation, useDeleteVideoMutation} = VideoSlice