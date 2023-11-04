import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";



const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        user: userSlice.reducer
    },
});
export default store;
