import axios from 'axios';
import React, { useState } from 'react'
import { options, SEARCH_MOVIE } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchMovieDetails } from '../redux/Slices/searchSlice';
import { setLoading } from '../redux/Slices/userSlice';
import MovieList from './MovieList';
// import { SEARCH_MOVIE } from '../utils/constant';

function SearchMovie() {
    const isLoading = useSelector((state) => state?.user?.isLoading);
    const { searchedMovie, movieName } = useSelector((state) => state.searchMovie);
    // const searchMovirArray = searchMovieDetails.searchedMovie
    // console.log('Search Details!', searchMovieDetails.movieName);

    const [searchMovie, setSearchMovie] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = async (event) => {
        dispatch(setLoading(true))

        event.preventDefault();
        try {
            const response = await axios.get(`${SEARCH_MOVIE}?query=${searchMovie}&include_adult=false&language=en-US&page=1&api_key=e1890ad3f44cda1d5bdf357a37c1659a`)
            const getSearchArray = response.data.results
            dispatch(setSearchMovieDetails({ searchMovie, getSearchArray }))
            console.log(response.data.results);
        } catch (error) {
            console.log('ERROR!', error); // You can replace this with your custom logic
        } finally {
            setSearchMovie('') // You can replace this with your custom logic
            dispatch(setLoading(false))
        }
    };
    const changingValues = (event) => {

        setSearchMovie(event.target.value)
    };

    return (
        <div className='text-orange-500 w-full pt-40 flex flex-col justify-center items-center '>
            <div className='w-[70%] '>
                <form action="" onSubmit={handleSubmit} onChange={changingValues} className='flex justify-between border-2 rounded-md p-2 shadow-md'>
                    <input placeholder='Search Movie' value={searchMovie} type="text" name="" id="" className=' w-full px-3 py-2 outline-none  text-black' />
                    <button className='w-44 bg-red-800 text-white px-8 ml-2 rounded-md block'>{isLoading ? "Loading..." : "Search Bar"}</button>
                </form>
            </div>
            {/* <div className='flex flex-wrap mt-16'> */}
            {/* {searchedMovie.length === 0 ? <p>not found this type of movies</p> : searchedMovie.map((v, i) => {
                    return <MovieList title={movieName} movies={v} />
                })} */}
            <div className='mt-[40px w-full pt-8'>
                {/* {searchedMovie.length === 0 ? <p className='px-6'>not found this type of movies</p> : <MovieList title={movieName} searchMoviePageTitleColor={true} movies={searchedMovie} />} */}
                {searchedMovie && searchedMovie.length > 0 ? (
                    <MovieList title={movieName} searchMoviePageTitleColor={true} movies={searchedMovie} />
                ) : (
                    <p className='px-6'>Not found this type of movies</p>
                )}
            </div>
            {/* </div> */}
        </div>
    )
}

export default SearchMovie