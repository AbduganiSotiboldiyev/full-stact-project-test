import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../helpers/persistance-storage";

export const initialState = {
    isLoading: false,
    loggedIn: false,
    error : null,
    user: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers : {
        signUserStart : state => {state.isLoading = true},
        signUserSuccess : (state,action) => {
            state.isLoading = false
            state.loggedIn = true
            state.user = action.payload
            setItem("token", action.payload.token)
        },
        signUserFailure : (state, action) => {
             state.isLoading = false
            state.error = action.payload
        },
        userLogout : (state, action) => {
            state.isLoading = false
            state.error = null
            state.user = null
            state.loggedIn = false
        }



      
    }
})

export const {signUserStart,signUserSuccess,signUserFailure,userLogout} = authSlice.actions
export default authSlice.reducer