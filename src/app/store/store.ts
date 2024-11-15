import { configureStore } from "@reduxjs/toolkit";
import { currencyApi } from "../../services/currency";


export const store = configureStore({
    reducer: {
        [currencyApi.reducerPath]: currencyApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(currencyApi.middleware)
})