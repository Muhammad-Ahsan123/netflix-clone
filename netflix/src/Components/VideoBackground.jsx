// import React from 'react'
// import useNowPlayingMovies from '../hooks/useMovieById'
// import { useSelector } from 'react-redux';

// function VideoBackground({ movieId }) {
//     const trailer = useSelector((state) => state?.movie?.trailerMovie)

//     console.log('TRAILER', trailer);
//     // console.log('asdasd');
//     // console.log('movies id', movieId);
//     useNowPlayingMovies(movieId)
//     return (
//         <div className="">
//             {/* dasdasd */}
//             <iframe
//                 className="w-screen aspect-video"
//                 src={`https://www.youtube-nocookie.com/embed/${trailer.key}?autoplay=1&mute=1`}
//                 title="YouTube video player"
//                 frameborder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen>
//             </iframe>
//         </div>
//     )
// }

// export default VideoBackground



import React from "react";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useMovieById";
import { FiCommand } from "react-icons/fi";

function VideoBackground({ movieId, customWidthHeight }) {
    const trailer = useSelector((state) => state?.movie?.trailerMovie);

    const loading = useNowPlayingMovies(movieId);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-black">
                <FiCommand className="loading-icon" />
                {/* <p className="text-orange-600 text-xl">Loading trailer...</p> */}
            </div>
        );
    }

    if (!trailer?.key) {
        return (
            <div className="flex justify-center items-center h-screen bg-black">
                <p className="text-white text-xl">No trailer available for this movie.</p>
            </div>
        );
    }

    // return (
    //     <div className="w-[vw] overflow-hidden">
    //         <iframe
    //             className={`${customWidthHeight ? 'w-full h-72' : 'w-screen'} aspect-video`}
    //             src={`https://www.youtube-nocookie.com/embed/${trailer.key}?autoplay=1&mute=1`}
    //             title="YouTube video player"
    //             frameBorder="0"
    //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //             allowFullScreen
    //         />
    //     </div>
    // );


    return (
        <div className="w-full overflow-hidden">
            <iframe
                className={`${customWidthHeight ? 'w-full h-72' : 'w-full'} aspect-video`}
                src={`https://www.youtube-nocookie.com/embed/${trailer.key}?autoplay=1&mute=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    )

}

export default VideoBackground;
