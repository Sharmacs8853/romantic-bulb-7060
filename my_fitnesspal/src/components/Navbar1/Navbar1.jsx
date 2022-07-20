import { Box, ButtonGroup,Flex, Heading, Spacer, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import React from 'react'
import '../Styles/commanStyle.css';
const Navbar1 = () => {
    return (
        <Box className='paddinglr' pt='3' pb='3'>
            <Flex minWidth='max-content' alignItems='center' gap='2'>
                <Box p='2'>
                    <Heading size='lg' color="#0066ee" fontWeight="700" ><Link to='/'>myfitnesspal</Link></Heading>
                </Box>
                <Spacer />
                <ButtonGroup gap='2'>
                   <Text className='textColor'><Link to='/login'>Log In</Link></Text>
                   <Text className='textColor'><Link to='/Signup'>Sign Up</Link></Text>
                </ButtonGroup>
            </Flex>
        </Box>
    )
}

export default Navbar1