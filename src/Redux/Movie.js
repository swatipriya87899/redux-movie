import { createSlice } from "@reduxjs/toolkit";

const Movie= createSlice({
    name:'movie',
    initialState:{
        allMovie:[],
        count:0
    },
    reducers:{
        setMovieData:(state, action)=>{
            state.allMovie=action.payload;
        }
    }
})

export const {setMovieData}=Movie.actions
export default Movie.reducer;