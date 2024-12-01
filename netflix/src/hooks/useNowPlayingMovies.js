import axios from "axios";
import { NOW_PLAYING, options } from "../utils/constant";
import { getMovies } from "../redux/Slices/moviesSlice";
import { useDispatch } from 'react-redux';

const useNowPlayingMovies = async () => {
    const dispatch = useDispatch()
    try {
        let response = await axios.get(NOW_PLAYING, options)
        console.log('Set Movies API', response.data.results);

        dispatch(getMovies(response.data.results))
    } catch (error) {
        console.log('Set Movies API ERROR', error);
    }
}

export default useNowPlayingMovies