import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import AllRoutes from '../AllRoutes/AllRoutes'
import Navbar1 from '../Navbar1/Navbar1'
import Navbar2 from '../Navbar2/Navbar2'

const Layout = () => {
  return (
    <Box>
       <Navbar1 />
       <Navbar2 />
       <AllRoutes />
    </Box>
  )
}

export default Layout