import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    supportId: ''
}

const supportSlice = createSlice({
    name: 'supportSlice',
    initialState,
    reducers: {
        setSupportId: ((state, action) => {
            state.supportId = action.payload
        })
    }
})

export default supportSlice.reducer
export const {setSupportId} = supportSlice.actions