import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: false,
    user : null
}
const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        login : (state, action) => {
            state.login = true
            state.user = action.payload.userData
        },
        logout : (state) => {
            state.login = false
            state.user = null
        }
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer