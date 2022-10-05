import { configureStore } from "@reduxjs/toolkit";

import productModalSlice from "../redux/product-modal/productModalSlice";

import cartItemsSlide from "./shopping-cart/cartItemsSlide";

export const store = configureStore({
    reducer: {
        productModal: productModalSlice,
        cartItems: cartItemsSlide
    }
})