import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userMark: '',
    marksStatus: {}
}

const assignmentSlice = createSlice({
    initialState,
    name: 'assignmentMark',
    reducers: {
        userMarkAdd: (state, action) => {
            state.userMark = action.payload
        },
        addMarksStatus: (state, action) => {
            state.marksStatus = action.payload
        }
    }
})

export default assignmentSlice.reducer
export const { userMarkAdd, addMarksStatus } = assignmentSlice.actions