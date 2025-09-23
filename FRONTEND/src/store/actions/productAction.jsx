import axiosInstance from "../../api/config";
// import axios from "../../api/config";
// import { loadproduct } from "../reducers/productSlice";


// export const asyncloadproducts = () => async (dispatch, getState) =>{
// //     try {
// //         const {limit} = getState().productReducer.product.lenght;
// //         const {data} = await axios.get(`/products?_limit=${limit}`);
// //         dispatch(loadproduct(data));
// //         console.log("product is loaded");
// //     } catch (error) {
// //         console.log(error);
// //     }
// // };
//     try {
//         // const {limit} = getState().productReducer.product.lenght;
//         // const {data} = await axiosInstance.get(`/api/products?_limit=${limit}`);
//         const {data} = await axiosInstance.get("/api/products")
//         console.log("data ", data)
//         // dispatch(loadproduct(data));
//         console.log("product is loaded");
//     } catch (error) {
//         console.log( 'error in fetch product', error);
//     }
// };
    
export const asynccreateproduct = (product) => async (dispatch, getState) =>{
    console.log(product)
    try {
        await axios.post("/products", product);
        dispatch(asyncloadproducts())
        console.log("product is created!")
    } catch (error) {
        console.log(error)
    }
}