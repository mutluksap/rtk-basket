import {configureStore} from "@reduxjs/toolkit";
import products from "./reducers/Products";
import basket from "./reducers/Basket";

const store = configureStore({
    reducer: {
        products,
        basket
    }
})

export default store