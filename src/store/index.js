import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import modal from "~/store/modal";
import appearance from "~/store/appearance";


export const store = configureStore({
    reducer : {
        auth,
        modal,
        appearance,
    }
})