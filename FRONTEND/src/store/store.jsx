import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import productSlice from "./reducers/productSlice";
import errorSlice from "./reducers/errorSlice";

export const store = configureStore({
    reducer:{
        error: errorSlice,
        userReducer: userSlice,
        productReducer: productSlice,

    }
})