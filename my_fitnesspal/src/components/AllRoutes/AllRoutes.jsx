import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../../Pages/About'
import Food from '../../Pages/Food'
import Home from '../../Pages/Home/Home'
import Exercise from '../Exercise/Exercise'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/exercise' element={<Exercise />}/>
        <Route path='/food' element={<Food />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
    </Routes>
  )
}

export default AllRoutes