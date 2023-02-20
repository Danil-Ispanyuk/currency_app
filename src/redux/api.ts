import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const apiBaseQuery = fetchBaseQuery({
    baseUrl: "https://api.privatbank.ua/p24api"
});
