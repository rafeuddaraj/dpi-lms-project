import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    videoId: ''
}

const videoSlice = createSlice({
    name: 'videoSlice',
    initialState,
    reducers: {
        setVideoId: (state, action) => {
            state.videoId = action.payload
        }
    }
})

export default videoSlice.reducer
export const { setVideoId } = videoSlice.actions