import {createSlice, current} from "@reduxjs/toolkit";
import { redirect } from "react-router-dom";

const initialState = {
    basket: [],
    totalPrice: 0,
    warningAlreadyInBasket: false,
    warningProductCount: false
}

const basket = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addBasket: (state, action) => {
            if(action.payload.count === 0){
                state.warningProductCount = true;
            }
            else {
                const checkBasket = state.basket.find(prod => prod.id === action.payload.id);
                if(checkBasket) {
                    state.warningAlreadyInBasket = true
                }
                else {
                    state.basket = [action.payload, ...state.basket]
                    state.totalPrice += action.payload.count * action.payload.price;
                    state.warningAlreadyInBasket = false
                }
                state.warningProductCount = false;
            }
        },
        removeBasket: (state, action) => {
            state.basket.splice(action.payload.id, 1);
            state.basket.length > 0 && redirect("/");
        },
        changeCount: (state, action) => {
            const product = state.basket.findIndex(e => e.id === action.payload.id);
            state.basket[product].count = action.payload.data
        }
    }
})

export const {addBasket, removeBasket, changeCount} = basket.actions
export default basket.reducer