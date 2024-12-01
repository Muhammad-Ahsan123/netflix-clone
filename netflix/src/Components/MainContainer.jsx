import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

function MainContainer() {
    const movie = useSelector((state) => state.movie)

     const nowPlayingMovies = movie?.nowPlayingMovies;
    const firstMovie = nowPlayingMovies && nowPlayingMovies.length > 0 ? nowPlayingMovies[0] : null;

    // Fallback values if `firstMovie` is null
    const id = firstMovie?.id || '';
    const title = firstMovie?.title || 'No Title Available';
    const overview = firstMovie?.overview || 'No Overview Available';
    
    if (!movie) return
    // return (
    //     <div className='w-full bg-black'>
    //         {/* MainContainer
    //         <MovieCategory /> */}
    //         <VideoTitle overview={overview} title={title} />
    //         <VideoBackground  movieId={id} />
    //         <div className='-mt-[170px] bg-black w-full'>
    //             <MovieList title='Now Playing Movies' movies={movie.nowPlayingMovies} />
    //             <MovieList title='Popular Movies' movies={movie.popularMovies} />
    //             <MovieList title='Top-Rated Movies' movies={movie.topRatedMovies} />
    //             <MovieList title='UpComing Movies' movies={movie.upComingMovies} />
    //         </div>
    //     </div>
    // )

    return (
        <div className='w-full bg-black'>
            {/* MainContainer
            <MovieCategory /> */}
            <VideoTitle overview={overview} title={title} />
            <VideoBackground movieId={id} />
            <div className='-mt-[170px] bg-black w-full'>
                <MovieList title='Now Playing Movies' movies={movie.nowPlayingMovies} />
                <MovieList title='Popular Movies' movies={movie.popularMovies} />
                <MovieList title='Top-Rated Movies' movies={movie.topRatedMovies} />
                <MovieList title='UpComing Movies' movies={movie.upComingMovies} />
            </div>
        </div>
    )
    
}

export default MainContainer
