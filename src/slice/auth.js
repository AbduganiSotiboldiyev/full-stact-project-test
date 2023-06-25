import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    isLoading: false,
    loggedIn: false,
    user: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers : {
        // Login
        userLoggedIn: (state) => {state.isLoading = true},
        userLoginSuccess : state => {},
        userLoginFailure : state => {},
        // registration
        userLRegisterIn: (state) => {state.isLoading = true},
        userRegisterSuccess : state => {},
        userRegisterFailure : state => {},
    }
})

export const {userLoggedIn, userLRegisterIn} = authSlice.actions
export default authSlice.reducer