
import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailer: null,
    popularMovies:null,
    tvSeries:null,
    airingToday:null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    addPopularMovies:(state, action) =>{
      state.popularMovies = action.payload;
    },
    addTvSeries:(state, action) =>{
      state.tvSeries = action.payload;
    },
    addAiringToday:(state, action) =>{
      state.airingToday = action.payload;
    }
  },
});

export const { addNowPlayingMovies , addMovieTrailer , addPopularMovies , addTvSeries , addAiringToday} = moviesSlice.actions;

export default moviesSlice.reducer;
