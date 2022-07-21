import { Box} from '@chakra-ui/react'
import React from 'react'
import AllRoutes from '../AllRoutes/AllRoutes'
import FootSection from '../FootSection/FootSection'
import Navbar1 from '../Navbar1/Navbar1'
import Navbar2 from '../Navbar2/Navbar2'

const Layout = ({children}) => {
  return (
    <Box>
       <Navbar1 />
       <Navbar2 />
       <AllRoutes />
        {children}
       <FootSection />
    </Box>
  )
}

export default Layout