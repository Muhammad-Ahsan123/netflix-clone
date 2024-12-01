import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'user',
    initialState: {
        movieName: null,
        searchedMovie: null
    },
    reducers: {
        setSearchMovieDetails: (state, action) => {
            const { searchMovie, getSearchArray } = action.payload;
            state.movieName = searchMovie;
            state.searchedMovie = getSearchArray;
        }
    }
})
export const { setSearchMovieDetails } = searchSlice.actions
export default searchSlice.reducer