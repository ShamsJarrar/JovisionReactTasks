import { configureStore } from "@reduxjs/toolkit";
import pageTextReducer from "./reduxFiles/modifyTextSliceTask39";

const store = configureStore({
    reducer: {
        pageText: pageTextReducer,
    }
});

export default store;