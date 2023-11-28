import { createSlice } from '@reduxjs/toolkit'
import { cloneDeep } from 'lodash'

const initialState = []

const quizSlice = createSlice({
    name: 'quizSlice',
    initialState,
    reducers: {
        getQuestions: (_, action) => {
            const quizzes = action.payload.map(quiz => ({ ...quiz, options: quiz.options.map(option => ({ ...option, checked: false })) }))
            return quizzes
        },
        changeAnswer: (state, action) => {
            const { quizIndex, optionIndex, value } = action.payload
            const cloneState = cloneDeep(state)
            cloneState[quizIndex].options[optionIndex].checked = value
            return cloneState

        }
    }

})

export const { getQuestions, changeAnswer } = quizSlice.actions
export default quizSlice.reducer