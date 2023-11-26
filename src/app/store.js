import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../features/apiSlice/apiSlice'
import authReducer from '../features/auth/authSlice'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: import.meta.env.NODE_ENV !== 'production'
})