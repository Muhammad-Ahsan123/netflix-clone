import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Slices/userSlice'
import movieReducer from './Slices/moviesSlice'
import searchMovieReducer from './Slices/searchSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
        searchMovie: searchMovieReducer
    }
})
export default store