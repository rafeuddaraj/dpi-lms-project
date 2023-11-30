import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    assignmentId: ''
}

const assignmentSlice = createSlice({
    name: 'assignmentSlice',
    initialState,
    reducers: {
        setAssignmentId: (state, action) => {
            state.assignmentId = action.payload
        }
    }
})

export default assignmentSlice.reducer

export const { setAssignmentId } = assignmentSlice.actions