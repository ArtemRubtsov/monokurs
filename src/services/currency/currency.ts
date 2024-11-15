import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Currency } from "./";


export const currencyApi = createApi({
    reducerPath: 'currencyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.monobank.ua/'
    }),
    endpoints: builder => ({
        getCurrencyByCode: builder.query<Currency, number>({
            query: (currency) => `bank/${currency}`
        })
    })
})

export const { useGetCurrencyByCodeQuery } = currencyApi