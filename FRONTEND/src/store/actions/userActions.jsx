import { loginuser, logoutuser } from "../reducers/userSlice"
import axios from "../../api/config";
import axiosInstance from "../../api/config";


export const asyncSigninUser = (user)  => async(dispatch)=>{
    try {
        console.log('this is the action user', user)
        const response = await axiosInstance.post("/api/auth/user/login", user);
        if(response){
            console.log("this is the redux action user", response)
            dispatch(loginuser(response.data.user))
        }
    } catch (error) {
        console.log("error while login", error);
        throw error.response?.data || error;
    }
}

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