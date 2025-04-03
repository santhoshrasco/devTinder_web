import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Updated import statement

const appStore = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default appStore;
