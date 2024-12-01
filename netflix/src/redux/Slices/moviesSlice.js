import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'searchMovie',
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upComingMovies: null,
        toggle: false,
        trailerMovie: null,
        openMovieModal: false,
        id: ""
    },
    reducers: {
        getMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        setPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        setTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        },
        setUpComingMovies: (state, action) => {
            state.upComingMovies = action.payload
        },
        setToggle: (state) => {
            state.toggle = !state.toggle
        },
        getTrailerMovie: (state, action) => {
            state.trailerMovie = action.payload
        },
        setModalState: (state, action) => {
            state.openMovieModal = action.payload
        },
        getId: (state, action) => {
            state.id = action.payload
        },
    }
})
export const { getMovies, setPopularMovies, setTopRatedMovies, setUpComingMovies, setToggle, getTrailerMovie, setModalState, getId } = movieSlice.actions
export default movieSlice.reducer