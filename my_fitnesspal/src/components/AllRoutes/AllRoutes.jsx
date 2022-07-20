import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../../Pages/About'
import Food from '../../Pages/Food'
import Home from '../../Pages/Home/Home'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/food' element={<Food />} />
    </Routes>
  )
}

export default AllRoutes