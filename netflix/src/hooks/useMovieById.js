// import axios from "axios";
// // import { MOVIE_VIDEO, options } from "../utils/constant";
// import { options } from "../utils/constant";
// import { useDispatch } from 'react-redux';
// import { getTrailerMovie } from "../redux/Slices/moviesSlice";
// import { useEffect } from "react";

// const useNowPlayingMovies = async (movieId) => {
//     console.log('movie IIIIIDDDDD' , movieId);

//     const dispatch = useDispatch()
//     useEffect(() => {
//         const getMovieById = async () => {
//             try {
//                 let response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=e1890ad3f44cda1d5bdf357a37c1659a`, options)
//                 console.log('movieresponse' , response);

//                 // console.log('VIDEOS', response.data.results);
//                 let trailer = response?.data?.results.filter((item) => {
//                     return item.type === 'Trailer'
//                 })
//                 dispatch(getTrailerMovie(trailer.length > 0 ? trailer[0] : response.data.results[0]))
//             } catch (error) {
//                 console.log('VIDEOS', error);
//             }
//         }
//         getMovieById()
//     }, [])
// }

// export default useNowPlayingMovies


import axios from "axios";
import { useDispatch } from "react-redux";
import { getTrailerMovie } from "../redux/Slices/moviesSlice";
import { useState, useEffect } from "react";

const useNowPlayingMovies = (movieId) => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const getMovieById = async () => {
            try {
                let response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=e1890ad3f44cda1d5bdf357a37c1659a`
                );

                // Filter to find trailers or use the first video as fallback
                let trailer = response?.data?.results.filter((item) => item.type === "Trailer");
                dispatch(getTrailerMovie(trailer.length > 0 ? trailer[0] : response.data.results[0]));
            } catch (error) {
                console.error("Error fetching trailer:", error);
            } finally {
                // Set loading to false once fetching is complete
                setLoading(false);
            }
        };
        if (movieId) getMovieById();
    }, [movieId, dispatch]);

    return loading;
};

export default useNowPlayingMovies;
