import { configureStore } from "@reduxjs/toolkit";
import Movie from "./Movie";

const store=configureStore({
    reducer:{
        Movie
    }
})

export default store;