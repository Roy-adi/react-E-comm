import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Cartslice'

import searchReducer from  './SearchResults'
const Store = configureStore({
    reducer :{
        cart: cartReducer,
        search: searchReducer,
    }
})
export default Store