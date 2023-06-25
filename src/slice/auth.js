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
        userLoggedIn: (state) => {state.isLoading = true},
    }
})

export const {userLoggedIn} = authSlice.actions
export default authSlice.reducer