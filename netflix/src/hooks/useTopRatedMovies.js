import axios from "axios";
import { options, TOP_RATEDMOVIES } from "../utils/constant";
import { setTopRatedMovies } from "../redux/Slices/moviesSlice";
import { useDispatch } from 'react-redux';

const useTopRatedMovies = async () => {
    const dispatch = useDispatch()
    try {
        let response = await axios.get(TOP_RATEDMOVIES, options)
        console.log('Now playing Movies API', response.data.results);

        dispatch(setTopRatedMovies(response.data.results))
    } catch (error) {
        console.log('Now playing Movies API ERROR', error);
    }
}

export default useTopRatedMovies