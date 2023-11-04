import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import usersSlice from "./slices/usersSlice";
import productSlice from "./slices/productSlice";


const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        user: usersSlice.reducer,
        product: productSlice.reducer,
    },
});
export default store;
