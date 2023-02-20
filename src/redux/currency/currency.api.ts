import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { ICurrencyApi, ICurrencyData } from "../../types/currency.type";
import { apiBaseQuery } from "../api";

export const CurrencyApi = createApi({
    reducerPath: "currencyQuery",
    baseQuery: apiBaseQuery,
    endpoints: (build) => ({
        getCurrency: build.query<ICurrencyData[], void>({
            query: () => ({
                url: "/pubinfo",
                params: {
                    exchange: "",
                    json: "",
                    coursid: 5
                }
            }),
            transformResponse: (res: ICurrencyApi[]) => {
                let counter = Number(localStorage.getItem("counter"));
                localStorage.setItem("counter", String(++counter));
                return res.reduce((acc: ICurrencyData[], item: ICurrencyApi) => {
                    acc.push({
                        id: `${Math.random().toString(16).slice(2)}`,
                        pair: `${item.ccy}/${item.base_ccy}`,
                        ccy: item.ccy,
                        base_ccy: item.base_ccy,
                        buy: Number(item.buy).toFixed(1),
                        sale: Number(item.sale).toFixed(1)
                    });
                    return acc;
                }, []);
            }
        })
    })
});

export const { useGetCurrencyQuery } = CurrencyApi;
