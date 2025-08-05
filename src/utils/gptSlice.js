
import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchView: false,
    gptMovies:{
      movieNames:null,
      movieInfos:null,
    }
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.gptSearchView = !state.gptSearchView;
    },
    addMovieNames:(state , action) =>{
      
      state.gptMovies.movieNames = action.payload;
    },
    addMovieInfos:(state , action) =>{
      
      state.gptMovies.movieInfos = action.payload;
    }
  },
});


export const {toggleGptSearchView , addMovieNames , addMovieInfos} = gptSlice.actions;

export default gptSlice.reducer;
