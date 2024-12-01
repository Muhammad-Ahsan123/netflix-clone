import React from 'react';
import './App.css';
import Body from './Components/Body';
import { Toaster } from 'react-hot-toast';
import MovieModal from './Components/MovieModal';

function App() {
  return (
    <>
      <Body />
      <Toaster position="top-center" reverseOrder={false} />
      <MovieModal/>
    </>
  );
}

export default App;
