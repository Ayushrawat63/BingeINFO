import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:'movie',
    initialState:{
        movieData:null,
        trailerId:null
    },
    reducers:{
        addMovie:(state,action)=>{
           state.movieData= action.payload
        },
        addTrailerId:(state,action)=>{
          state.trailerId=action.payload;
        }
    }
})

export const {addMovie,addTrailerId}=movieSlice.actions;

export default movieSlice.reducer;