import axios from "../../api/config";
import { loadproduct } from "../reducers/productSlice";


export const asyncloadproducts = () => async (dispatch, getState) =>{
    try {
        const {limit} = getState().productReducer.product.lenght;
        const {data} = await axios.get(`/products?_limit=${limit}`);
        dispatch(loadproduct(data));
        console.log("product is loaded");
    } catch (error) {
        console.log(error);
    }
};