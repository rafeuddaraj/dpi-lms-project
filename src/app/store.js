import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../features/apiSlice/apiSlice'
import authReducer from '../features/auth/authSlice'
import quizReducer from '../features/quizSlice/quizSlice'
import userMarkReducer from '../features/assignmentMarkSlice/assignmentMarkSlice'
import videoReducer from '../features/videoSlice/videoSlice'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        quizzes: quizReducer,
        userMark: userMarkReducer,
        videos: videoReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: import.meta.env.NODE_ENV !== 'production'
})