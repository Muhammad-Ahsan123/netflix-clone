import React from 'react'
import {createBrowserRouter , RouterProvider } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Browse from './Browse'
function Body() {
    let routes = createBrowserRouter([
        {
            path : '/',
            element : <Login/>,
        },
        {
            path : '/register',
            element : <Register/>,
        },
        {
            path : '/browse',
            element : <Browse/>,
        },
    ])
  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default Body
