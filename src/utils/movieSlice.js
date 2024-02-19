import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo : null,
    },
    reducers: {
        addNowPlayingMovies: (state,action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTvSeries: (state, action) => {
            state.TvSeries = action.payload;   
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        }
    },
});
export const { addNowPlayingMovies, addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpcomingMovies ,addTvSeries} = movieSlice.actions;
export default movieSlice.reducer;