import { Box, Button, Container, Flex, Heading, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Login.module.css'
const Login = () => {
    return (
        <Box>
        <Container mt={10} p={5} className={styles.loginBox}>
            <Flex direction={'column'} p={10} gap={3}>
                <Heading size='md' textAlign='center'>Member Login</Heading><br/>
                <Input size='lg' placeholder='Email' />
                <Input size='lg' placeholder='Password' />
                <Link to='/'><Text size='13px' color='blue'>Forgot password?</Text></Link>
                <Button colorScheme='blue' size='lg'>
                    LOG IN
                </Button>
                <Text textAlign={'center'}>or</Text>
                <Button colorScheme='facebook' size='lg'>
                    CONTINUE WITH FACEBOOK
                </Button>
            </Flex>
        </Container>
        <Flex size='13px' justifyContent={'center'} mt={5}>
            <Text  textAlign={'center'}>Not a member yet? </Text>
            <Text color='blue'><Link to='/'> Sign up now</Link>!</Text>
        </Flex>
       
        </Box>
    )
}

export default Login

// `https://api.nal.usda.gov/fdc/v1/foods...{encodeURIComponent(params.api_key)}&query=${encodeURIComponent(params.query)}&dataType=${encodeURIComponent(params.dataType)}&pageSize=${encodeURIComponent(params.pagesize)}`
// `https://api.nal.usda.gov/fdc/v1/foods...{encodeURIComponent(params.api_key)}&query=${encodeURIComponent(params.query)}&dataType=${encodeURIComponent(params.dataType)}&pageSize=${encodeURIComponent(params.pagesize)}`

// `https://api.nal.usda.gov/fdc/v1/foods/search?query=banana&pageSize=2&api_key=VbH2yXFcNCuUain5v2AhjEC1DkQAXyBMjvof1N5F`

 //Api key//VbH2yXFcNCuUain5v2AhjEC1DkQAXyBMjvof1N5F 