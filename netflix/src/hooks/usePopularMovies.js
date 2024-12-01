import axios from "axios";
import { options, POPULAR_MOVIES } from "../utils/constant";
import { setPopularMovies } from "../redux/Slices/moviesSlice";
import { useDispatch } from 'react-redux';

const usePopularMovies = async () => {
    const dispatch = useDispatch()
    try {
        let response = await axios.get(POPULAR_MOVIES, options)
        console.log('Now playing Movies API', response.data.results);

        dispatch(setPopularMovies(response.data.results))
    } catch (error) {
        console.log('Now playing Movies API ERROR', error);
    }
}

export default usePopularMovies