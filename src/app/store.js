import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../features/apiSlice/apiSlice'
import authReducer from '../features/auth/authSlice'
import quizReducer from '../features/quizSlice/quizSlice'
import userMarkReducer from '../features/assignmentMarkSlice/assignmentMarkSlice'
import videoReducer from '../features/videoSlice/videoSlice'
import quizMarkReducer from '../features/quizMarkSlice/quizSlice'
import assignmentsReducer from '../features/assignmentSlice/assignmentsSlice'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        quizzes: quizReducer,
        userMark: userMarkReducer,
        videos: videoReducer,
        quizzesMarks: quizMarkReducer,
        assignments: assignmentsReducer 
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: import.meta.env.NODE_ENV !== 'production'
})