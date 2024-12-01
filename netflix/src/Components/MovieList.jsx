import React from 'react'
import MovieCard from './MovieCard'

function MovieList({ title, movies, searchMoviePageTitleColor = false }) {
    // console.log('moviessssdfd', movies);

    // return (
    //     <div className='text-white px-6 pb-12'>
    //         <p className={`font-bold text-2xl ${searchMoviePageTitleColor ? 'text-black' : 'text-white'}`}> {title}</p>
    //         <div className='mt-4 flex overflow-x-auto no-scrollbar cursor-pointer'>
    //             <div className='flex items-center'>
    //                 {movies && movies.map((movie) => {
    //                     return <MovieCard movieId={movie.id} moviesthumbnail={movie.poster_path} />
    //                 })}
    //             </div>
    //         </div>
    //     </div>
    // )


    return (
        <div className='text-white px-6 pb-12'>
            <p className={`font-bold text-2xl ${searchMoviePageTitleColor ? 'text-black' : 'text-white'}`}> {title}</p>
            <div className='mt-4 flex overflow-x-auto no-scrollbar cursor-pointer'>
                <div className='flex items-center'>
                    {movies && movies.map((movie) => {
                        return <MovieCard movieId={movie.id} moviesthumbnail={movie.poster_path} />
                    })}
                </div>
            </div>
        </div>
    )

}

export default MovieList
