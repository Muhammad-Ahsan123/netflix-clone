import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_ENDPOINT } from '../utils/constant';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../redux/Slices/userSlice';
import toast from 'react-hot-toast';
import { setToggle } from '../redux/Slices/moviesSlice';

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  const toggle = useSelector((state) => state.movie.toggle);

  // const hadleLogout = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${API_ENDPOINT}/logout` // This ensures the cookie is sent and stored
  //     );
  //     console.log('LOGOUT RESPONSE', response.data.success);
  //     if (response.data.success) {
  //       document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; secure; SameSite=Strict';
  //       toast.success('User Successfully Logout')
  //     }
  //     // localStorage.removeItem('token'); 
  //      // Optional, if you're also storing it in localStorage
  //     // Or reset Redux user state
  //     navigate('/')
  //     dispatch(setUser(null));
  //   } catch (error) {
  //     console.error("Logout failed", error);
  //   }
  // }
  const handleLogout = async () => {
    try {
      // Make the logout request to the backend to clear the session cookie on the server side
      const response = await axios.get(`${API_ENDPOINT}/logout`, { withCredentials: true });

      // console.log('LOGOUT RESPONSE', response.data.success);

      if (response.data.success) {
        // Delete the cookie by setting its expiration to a past date
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; secure; SameSite=Strict';
        toast.success('User Successfully Logged Out');
      }

      // Optionally clear other storage like localStorage or Redux state
      dispatch(setUser(null)); // Reset Redux state
      navigate('/'); // Redirect to home page
    } catch (error) {
      console.error("Logout failed", error);
      toast.error('Failed to log out. Please try again.');
    }
  };


  const handleBrowse = () => {
    // console.log('click');

    dispatch(setToggle())
  }

  // return (
  //   <>
  //     <div className='absolute z-[20] w-full flex justify-between items-center px-12 py-4 bg-gradient-to-b from-black'>
  //       <img src='/netflixlogo.png' alt="netflixlogo" className='w-36' />

  //       {
  //         user && (<div className='flex items-center'>
  //           <h2 className='text-white'>{user.fullName}</h2>
  //           <div className='ml-12'>
  //             <button className='bg-red-800 text-white px-8 rounded-md py-2' onClick={handleLogout}>Logout</button>

  //             <button className='bg-red-800 text-white px-8 ml-2 rounded-md py-2' onClick={handleBrowse}>{toggle ? 'Home' : 'Search Bar'}</button>
  //           </div>
  //         </div>)
  //       }

  //     </div>
  //   </>
  // )
  return (
    <>
      <div className='absolute z-[20] w-full flex justify-between items-center px-6 sm:px-12 py-4 bg-gradient-to-b from-black'>
        {/* Logo */}
        <img src='/netflixlogo.png' alt="netflixlogo" className='w-28 sm:w-36' />

        {
          user && (
            <div className='flex items-center'>
              {/* User Full Name */}
              <h2 className='text-white text-sm sm:text-base'>{user.fullName}</h2>

              <div className='ml-4 sm:ml-12 flex items-center space-x-2'>
                {/* Logout Button */}
                <button className='bg-red-800 text-white px-6 sm:px-8 rounded-md py-2 text-sm sm:text-base' onClick={handleLogout}>Logout</button>

                {/* Toggle Button */}
                <button className='bg-red-800 text-white px-6 sm:px-8 ml-2 rounded-md py-2 text-sm sm:text-base' onClick={handleBrowse}>
                  {toggle ? 'Home' : 'Search Bar'}
                </button>
              </div>
            </div>
          )
        }
      </div>
    </>

  )
}

export default Header
