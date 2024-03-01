import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./reducers/auth.reducer"
export const store = configureStore({
    reducer : {
        Auth : authReducer
    }
})