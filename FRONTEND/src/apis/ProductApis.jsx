import axiosInstance from "../api/config"


export const fetchAllProduct = async()=>{
    try {
        const reponse = await axiosInstance.get("/api/products");
        console.log("frontend product res--", reponse)
        if(reponse){
            return reponse.data.products
        }
    } catch (error) {
        console.log("Reponse error", error)
    }
}

