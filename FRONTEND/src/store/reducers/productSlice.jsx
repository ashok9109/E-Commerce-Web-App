import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    products: []
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        loadproduct: (state, action) => {
            state.products = action.payload;
            console.log("proudusts slice data--", state.products)
        },
        lazyloadproduct: (state, action) => {
            state.products = [...state.products, ...action.payload]
        },
    }
});
export default productSlice.reducer;
export const {loadproduct, lazyloadproduct} = productSlice.actions;