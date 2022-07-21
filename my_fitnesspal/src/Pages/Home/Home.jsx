import { Box, Button, Flex, Heading, Link, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import styles from './Home.module.css';
import '../../components/Styles/commanStyle.css'
import SearchSection from '../../components/SearchSection/SearchSection';
import YourGoals from '../../components/YourGoals/YourGoals';
import Victory from '../../components/Victory/Victory';
import Recipes from '../../components/Recipes/Recipes';
import Apps50 from '../../components/Apps50/Apps50';
//import FootSection from '../../components/FootSection/FootSection';
const Home = () => {
  return (<>
    <Flex className={styles.homeflex}>
      <Box className={styles.leftbox}></Box>
      <Box className={styles.backimg}>
        <Flex>
          <Box className={styles.contentbox} >
            <Heading size='4xl' fontWeight='800'>Fitness starts with what you eat.</Heading><br />
            <Text maxW='300px'>Take control of your goals. Track calories, break down ingredients, and log activities with MyFitnessPal.</Text>
            <br /><br />
            <Button colorScheme='blue' size='lg' py={2} px={20} fontSize='14PX'>START FOR FREE</Button><br /><br />
            <Text>Already have an account? <Link to="/login">Login</Link></Text>
          </Box>
          <Spacer />
        </Flex>
      </Box>
      <Box className={styles.rightbox}></Box>
    </Flex>
    <SearchSection />
    <YourGoals />
    <Victory />
    <Recipes/>
    <Apps50 />
   
  </>
  )
}

export default Home