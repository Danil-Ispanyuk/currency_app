import { configureStore } from "@reduxjs/toolkit";
import { CurrencyApi } from "./currency/currency.api";

const store = configureStore({
    reducer: {
        [CurrencyApi.reducerPath]: CurrencyApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([CurrencyApi.middleware])
});

export default store;
