import { Box, Center, Flex, Square, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react'
import '../Styles/commanStyle.css';
const Navbar2 = () => {
    return (
        <Box >
            <Flex className='backColor paddinglr' color="white">
                <Square className='hover'>
                   <Link to='/about'>About</Link>
                </Square>
                <Square className='hover'>
                <Link to='/food'>Food</Link>
                </Square>
                <Square className='hover'>
                    <Link to="/exercise">Exercise</Link>
                </Square>
                <Square className='hover'>
                    <Link to='/app'>Apps</Link>
                </Square>
                <Square className='hover'>
                    <Link to='/community'>Community</Link>
                </Square>
                <Square className='hover'>
                    <Link to='/blog'>Blog</Link>
                </Square>
                <Square className='hover'>
                    <Link to='/premium'>Premium</Link>
                </Square>
            </Flex>
        </Box>
    )
}

export default Navbar2