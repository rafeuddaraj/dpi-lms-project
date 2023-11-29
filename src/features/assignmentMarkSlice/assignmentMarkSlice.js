import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const assignmentSlice = createSlice({
    initialState,
    name: 'assignmentMark',
    reducers: {
        userMarkAdd: (state, action) => {
            
            return action.payload
        }
    }
})

export default assignmentSlice.reducer
export const { userMarkAdd } = assignmentSlice.actions