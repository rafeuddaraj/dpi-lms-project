import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
    devTools: import.meta.env.NODE_ENV !== 'production'
})