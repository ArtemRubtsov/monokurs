import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { currencyApi } from '../../services'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(currencyApi.middleware),
  reducer: {
    [currencyApi.reducerPath]: currencyApi.reducer,
  },
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
