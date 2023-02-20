import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios, {get} from "axios";

const initialState = {
    products: [],
    loading: false,
    error: ""
}

export const getProducts = createAsyncThunk('getProducts', async () => {
    const response = await axios.get(`https://fakestoreapi.com/products`);
    return response.data;
})

const products = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.loading = false;
            })
            .addCase(getProducts.rejected, (state, action) => {
                 state.loading = false;
                 state.error = "Veri çekilirken bir hata oluştu."
            })
    }
})

export default products.reducer