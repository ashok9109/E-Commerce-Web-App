import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    product: []
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        loadproduct: (state, action) => {
            state.product = action.payload;
        },
        lazyloadproduct: (state, action) => {
            state.product = [...state.product, ...action.payload]
        },
    }
});
export default productSlice.reducer;
export const {loadproduct, lazyloadproduct} = productSlice.actions;