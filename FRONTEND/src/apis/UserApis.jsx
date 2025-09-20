import axiosInstance from "../api/config";

// signup user api

export const signupUser = async (user) => {
    try {
        const res = await axiosInstance.post("/api/auth/user/signup", user);
        if (res) {
            console.log("User Rigestered ")
            return res.data.user;
        }
    } catch (error) {
        console.log(error);
    }
};

// sign user api

export const signinUser = async (user) => {
    try {
        const loggedInUser = await axiosInstance.post("/api/auth/user/login", user);
        if (loggedInUser) {
            console.log("User login")
            return loggedInUser.data.user;
        }
    } catch (error) {
        console.log(error);
    }
};

// logout user api

export const logoutUser = async () => {
    try {
        let res = await axiosInstance.get("/api/auth/user/logout");
        if (res) {
            return res.data.message;
        }
    } catch (error) {
        console.log("api logout error---", error)
    }
}