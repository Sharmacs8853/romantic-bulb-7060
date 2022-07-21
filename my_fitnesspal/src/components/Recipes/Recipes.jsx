import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'
import styles from './Recipes.module.css'
const Recipes = () => {
    return (
        <Box className={styles.recipesbox}>
            <Container maxWidth='container.sm' >
                <Heading size='2xl' fontWeight='800' pt='100px'>Recipes & Inspiration</Heading>
                <Text py={6}>Get nutritionist-approved recipes and motivational workout tips from MyFitnessPal experts.</Text>
            </Container>
            <Container maxWidth="container.lg" mt={10}>
                <Flex gap={8}>
                    <Box className={styles.cartbox}>
                        <Box><img className={styles.cartImg} src='https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbreakfast-300-calories.d991cc82.png&w=1920&q=75' alt="Image Icon" /></Box>
                        <Box textAlign="left" p={4}>
                        <Heading size='md'>Essential Guide to Getting Moving</Heading>
                            <br/>
                            <Text color='blue'><Link  to="/">My Fitness Blog </Link></Text>
                        </Box>
                    </Box>
                    <Box className={styles.cartbox}>
                        <Box><img className={styles.cartImg} src='https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcheat-days.a49e92b5.jpg&w=1920&q=75' alt='Image Icon' /></Box>
                        <Box textAlign="left" p={4}>
                        <Heading size='md'>15 Make_Ahead Breakfasts Under 300 calories</Heading>
                            <br/>
                            <Text color='blue'><Link  to="/">My Fitness Blog </Link></Text>
                        </Box>
                    </Box>
                    <Box className={styles.cartbox}>
                        <Box><img className={styles.cartImg} src='https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgetting-moving.e3e4042a.png&w=1920&q=75' alt='Image Icon' /></Box>
                        <Box textAlign="left" p={4}>
                            <Heading size='md'>The Problem With Cheat Days</Heading>
                            <br/>
                            <Text color='blue'><Link to="/">My Fitness Blog </Link></Text>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}

export default Recipes