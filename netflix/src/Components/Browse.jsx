import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Header from './Header';
import MainContainer from './MainContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import setPopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import SearchMovie from './SearchMovie';

function Browse() {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user.user)
  const toggle = useSelector((state) => state.movie.toggle);
  // console.log('toggle', toggle);



  useNowPlayingMovies()
  setPopularMovies()
  useTopRatedMovies()
  useUpComingMovies()

  useEffect(() => {
    if (!user) {
      toast.error('You have to login first for access browse page');
      navigate('/');
    }
  }, [user, navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Header />
      {
        toggle ? <SearchMovie /> : <MainContainer />
      }

    </>
  )
}

export default Browse
