import axiosInstance from "../api/config"


export const sellerSignup = async (seller) => {
    try {
        const res = await axiosInstance.post("/api/seller/signup", seller);
        if (res) {
            console.log("seller Registered");
            return res.data.seller
        }

    } catch (error) {
        console.log("seller api error", error)
    }
}