import React, { useState } from 'react'
import { BANNER_URL } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { getId, setModalState } from '../redux/Slices/moviesSlice';

function MovieCard({ moviesthumbnail, movieId }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const isLoading = useSelector((state) => state.user.isLoading)
    const dispatch = useDispatch()

    if (moviesthumbnail === null) return null


    const openMovieModal = () => {
        dispatch(getId(movieId)); // Open the modal
        dispatch(setModalState(true)); // Open the modal
    };
    // return (
    //     <div className='flex justify-center items-center border-2 w-44 rounded-md text-orange-600 mr-4'>
    //         {/* hi */}
    //         {isLoading ? 'Loading...' : <img src={`${BANNER_URL}/${moviesthumbnail}`} alt="movie thumbnail" onClick={openMovieModal} />}
    //     </div>
    // )


    return (
        <div className='flex justify-center items-center border-2 w-44 rounded-md text-orange-600 mr-4 mb-4 sm:w-56 lg:w-64'>
            {isLoading ? 'Loading...' : <img src={`${BANNER_URL}/${moviesthumbnail}`} alt="movie thumbnail" className='w-full h-auto cursor-pointer' onClick={openMovieModal} />}
        </div>
    )

}

export default MovieCard
