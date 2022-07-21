import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import styles from './Apps50.module.css';
const Apps50 = () => {
    return (
        <Box className={styles.appsbox}>
            <Container maxWidth='container.sm' >
                <Heading size='2xl' px={20} fontWeight='800' pt='100px'>Connect with over 50 apps.</Heading>
                <Text py={10} px={10}>Easily link your MyFitnessPal account with apps that support your healthier lifestyle. It’s not just about calories. It’s about feeling better, looking better, and living better.</Text>
                <img src='https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-apps%402x.85e549ef.png&w=1920&q=75' alt='Image' />
                <Flex className={styles.logoBox}>
                    <Box><img src='https://www.myfitnesspal.com/_next/static/media/conversion-apple-app-store-logo.751bc42c.svg' alt='Logo Icon' /></Box>
                    <Box><img src='https://www.myfitnesspal.com/_next/static/media/conversion-google-play-store-logo.1c6369a1.svg' alt='Logo Icon' /></Box>
                </Flex>
            </Container>
        </Box>
    )
}

export default Apps50