import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./cartSlice"
import restaurantApi from "./restaurantApi"
import { setupListeners } from '@reduxjs/toolkit/query'

const appStore = configureStore({
    reducer: {
        cart: cartSlice,
        [restaurantApi.reducerPath]: restaurantApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(restaurantApi.middleware)
})

setupListeners(appStore.dispatch)

export default appStore