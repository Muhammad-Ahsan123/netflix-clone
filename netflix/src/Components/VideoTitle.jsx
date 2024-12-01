import React from 'react'
import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
function VideoTitle({ overview , title }) {
    // return (
    //     <div className='w-[vw] absolute top-[30%] left-8'>
    //         <h1 className='mb-3'>{title}</h1>
    //         <p className='mb-6 w-1/3'>{overview}</p>
    //         <div className='mb-4 flex'>
    //             <button className='py-1 px-8 border-2 rounded-md bg-white hover:bg-opacity-90 flex items-center'>
    //                 <CiPlay1 size={24} className='' /><span className='pl-2'>Play</span>
    //             </button>
    //             <button className='py-1 px-8 ml-4 rounded-md bg-white bg-opacity-60 flex items-center'>
    //                 <CiCircleInfo size={24} />
    //                 <span className='pl-2'>
    //                     Watch More
    //                 </span>
    //             </button>
    //         </div>
    //     </div>
    // )

    return (
        <div className='w-full absolute top-[30%] left-8 px-4 sm:px-6 md:left-12 lg:left-16'>
            <h1 className='mb-3 text-white text-xl sm:text-2xl md:text-3xl'>{title}</h1>
            <p className='mb-6 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 text-white'>{overview}</p>
            <div className='mb-4 flex flex-wrap gap-4'>
                <button className='py-1 px-8 border-2 rounded-md bg-white hover:bg-opacity-90 flex items-center'>
                    <CiPlay1 size={24} /><span className='pl-2'>Play</span>
                </button>
                <button className='py-1 px-8 rounded-md bg-white bg-opacity-60 flex items-center'>
                    <CiCircleInfo size={24} />
                    <span className='pl-2'>Watch More</span>
                </button>
            </div>
        </div>
    )
    
}

export default VideoTitle
