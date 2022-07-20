import { Box, Button, Container, Flex, Heading, Spacer, Text } from '@chakra-ui/react';
import React from 'react'
import styles from './YourGoals.module.css';
const YourGoals = () => {
    return (
        <Container maxWidth='container.lg' marginTop='80px' maxHeight='600px'>
            <Heading size='2xl' fontWeight='800' className={styles.textheading}>The Tools for Your Goals</Heading><br />
            <Text maxWidth='570px' className={styles.textheading}>Trying to lose weight, tone up, lower your BMI, or invest in your overall health? We give you the right features to hit your goals.</Text>
            <Flex>
                <Box className={styles.carts}>
                    <Box className={styles.cartImg}>
                        <img src='https://www.myfitnesspal.com/_next/static/media/diary.e6e4c438.svg' alt="img_Icons" />
                    </Box>
                    <Heading size='md'>Learn. Track. Improve.</Heading><br />
                    <Text>Keeping a food diary helps you understand your habits and increases your likelihood of hitting your goals.</Text>
                </Box>
                <Spacer />
                <Box className={styles.carts}>
                    <Box className={styles.cartImg}>
                        <img src='https://www.myfitnesspal.com/_next/static/media/barcode.18277ae4.svg' alt="img_Icons" />
                    </Box>
                    <Heading size='md'>Logging Simplified</Heading><br />
                    <Text>Scan barcodes, save meals and recipes, and use Quick Tools for fast and easy food tracking.</Text>
                </Box>
                <Spacer />
                <Box className={styles.carts}>
                    <Box className={styles.cartImg}>
                        <img src='https://www.myfitnesspal.com/_next/static/media/shoeblue.28e2684f.svg' alt="img_Icons" />
                    </Box>
                    <Heading size='md'>Stay Motivated</Heading><br />
                    <Text>Join the World’s Largest Fitness Community for advice, tips, and support 24/7.</Text>
                </Box>
            </Flex>
            <Box className={styles.YourGoalsBtn}>
                <Button colorScheme='blue' size='lg' py={2} px={20} fontSize='14PX'>START YOUR JOURNEY TODAY</Button><br />
            </Box>
            
        </Container>
    )
}

export default YourGoals