import { loginuser, logoutuser } from "../reducers/userSlice"
import axios from "../../api/config";

export const asynccurrentuser = () => async (dispatch, getState) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user) {
            dispatch(loginuser(user));
            console.log("login save");
        } else {
            console.log("data not found");
        }
    } catch (error) {
        console.log(error);
    }
};

export const asyncsigninuser = (user) => async (dispatch, getState) =>{
    try {
        const {data} = await axios.post("/api/auth/user/login", user);
        dispatch(loginuser(data.user))
        localStorage.setItem("user", JSON.stringify(data.user));
        console.log("User login")
    } catch (error) {
        console.log(error.response.data)
    }
};

export const asyncsignupuser = (user) => async (dispatch, getState) => {
    try {
        await axios.post("/api/auth/user/register", user);
        console.log("User Registered")
    } catch (error) {
        console.log(error);
    }
};

export const asyncupdateuser = (id, user) => async (dispatch, getState) =>{
    try {
        const {data} = await axios.patch(`/users/${id}`,user);
        localStorage.setItem("user", JSON.stringify(data));
        dispatch(asynccurrentuser());
        console.log("user is Updated");
    } catch (error) {
        console.log(error);
    }
};

export const asynclogoutuser = () => async (dispatch, getState) =>{
    try {
        localStorage.removeItem("user");
        dispatch(logoutuser());
        console.log("user logout ")
    } catch (error) {
        console.log(error);
    }
}

export const asyncdeleteuser = (id) => async (dispatch, getState) => {
    try {
        await axios.delete(`/users/${id}`);
        localStorage.removeItem("user");
        dispatch(logoutuser());
        console.log("User Deleted!");
    } catch (error) {
        console.log(error);
    }
};