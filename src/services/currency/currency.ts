import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { CurrencyResponse } from './'

export const currencyApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://bank.gov.ua/NBUStatService/v1/',
  }),
  endpoints: builder => ({
    getCurrencyByCode: builder.query<CurrencyResponse[], void>({
      query: () => 'statdirectory/exchange?json',
    }),
  }),
  reducerPath: 'currencyApi',
})

export const { useGetCurrencyByCodeQuery } = currencyApi
