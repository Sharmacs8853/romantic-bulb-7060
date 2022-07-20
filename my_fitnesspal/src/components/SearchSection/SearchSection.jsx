import { Search2Icon } from '@chakra-ui/icons'
import { Box, Button, Heading, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import React from 'react'
import styles from './SearchSection.module.css';
import '../Styles/commanStyle.css';
const SearchSection = () => {
    return (
        <Box className={styles.searchbox}>
            <br /><br /><br /><br /><br /><br /><br />
            <Box className={styles.searchContentBox}>
                <hr className={styles.hrtag} />
                <Heading className={styles.heading} size='2xl' maxW='600px' fontWeight='800'>Search over 11 million foods in our database</Heading>
                <Text className={styles.text} maxW='500px'>What's in your food? Learn about calorie count, nutrition information and serving size.</Text>
            </Box>
            <Box className={styles.serarchbuttonbox}>
                <Box className={styles.inputtagwrap}>
                    <input className={styles.inputtag} placeholder="Get the nutrition for any food, like an Apply" />
                    <Button colorScheme='gray'><Search2Icon /></Button>
                </Box>
            </Box>
        </Box>
    )
}
export default SearchSection