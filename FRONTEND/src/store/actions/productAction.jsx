import axiosInstance from "../../api/config";

// ====================
// create product
// ===================
export const asyncCreateProduct = (product) => async (dispatch, getState) =>{
    try {
      const response =  await axiosInstance.post("api/products/create", product);
      if(response){
        return response.data;
      }
    } catch (error) {
        console.log("error while create product",error);
    }
};