import axiosInstance from "../api/config"


// ==========================
// create product is api
// =========================

export const createProductApi = async(data)=>{
    try {
        const response = await axiosInstance.post("/create/products", data);
        if(response){
            return response.data;
        }
    } catch (error) {
        throw error.response.data || error;
    }
}

// =========================
// fetching all products
// =========================
export const fetchAllProduct = async()=>{
    try {
        const reponse = await axiosInstance.get("/api/products");
        console.log("frontend product res--", reponse)
        if(reponse){
            return reponse.data.products
        }
    } catch (error) {
        throw error.reponse.data || error;
    }
}

