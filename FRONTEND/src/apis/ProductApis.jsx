import axiosInstance from "../api/config"


// =========================
// fetching all products
// =========================
export const fetchAllProductApi = async()=>{
    try {
        const reponse = await axiosInstance.get("/api/products");
        if(reponse){
            return reponse.data.products
        }
    } catch (error) {
        throw error.reponse.data || error;
    }
};

// ====================
// create product
// ===================
export const createProductApi = async (data) =>{
    try {
      const response =  await axiosInstance.post("api/products/create", data);
      if(response){
        return response.data;
      }
    } catch (error) {
        console.log("error while create product",error);
    }
};