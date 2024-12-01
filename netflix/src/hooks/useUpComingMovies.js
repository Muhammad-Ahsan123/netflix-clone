import axios from "axios";
import { options, UPCOMING_MOVIES } from "../utils/constant";
import { setUpComingMovies } from "../redux/Slices/moviesSlice";
import { useDispatch } from 'react-redux';

const useUpComingMovies = async () => {
    const dispatch = useDispatch()
    try {
        let response = await axios.get(UPCOMING_MOVIES, options)
        console.log('Now playing Movies API', response.data.results);

        dispatch(setUpComingMovies(response.data.results))
    } catch (error) {
        console.log('Now playing Movies API ERROR', error);
    }
}

export default useUpComingMovies