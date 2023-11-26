import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    accessToken: undefined,
    user: {}
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        adminUserLoggedIn: (state, action) => {
            state.accessToken = action.payload.accessToken
            state.user = action.payload.user
        },
        userLoggedIn: (state, action) => {
            state.accessToken = action.payload.accessToken
            state.user = action.payload.user
        },
        userLoggedOut: (state, action) => {
            state.accessToken = undefined
            state.user = {}
            localStorage.removeItem(action.payload)
        },
    }
})

export default authSlice.reducer

export const { userLoggedIn, userLoggedOut,adminUserLoggedIn } = authSlice.actions