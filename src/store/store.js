import { configureStore } from "@reduxjs/toolkit";

import { authSlice } from "./auth/authSlice";
import { modalSlice } from "./modal/modalSlice";
import { todoSlice } from "./todo/todoSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        todo: todoSlice.reducer,
        modal: modalSlice.reducer
    }
})