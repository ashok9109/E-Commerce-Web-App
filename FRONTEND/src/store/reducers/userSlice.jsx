import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginuser: (state, action) => {
            state.user = action.payload;
            console.log("this is redux user", state.user)
        },

        logoutuser: (state,) => {
            state.user = null;
        }
    }
});
export default userSlice.reducer;
export const { loginuser, logoutuser } = userSlice.actions;