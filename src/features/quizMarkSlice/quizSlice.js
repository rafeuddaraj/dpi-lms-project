import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quizId: ''
}

const quizSlice = createSlice({
    name: "quizSlice",
    initialState,
    reducers: {
        setQuizId: (state, action) => {
            state.quizId = action.payload
        }
    }
})

export default quizSlice.reducer

export const {setQuizId}= quizSlice.actions