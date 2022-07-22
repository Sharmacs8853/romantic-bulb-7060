import { Box, Container, Flex, Text } from '@chakra-ui/react';
import React from 'react'
import styles from './FootSection.module.css';
import { Link } from 'react-router-dom';
const FootSection = () => {
  const menuArr = [
    "Colorie Counter",
    "Blog",
    "Terms",
    "Privacy",
    "Contact Us",
    "API",
    "Joba",
    "Feedback",
    "Community",
    "Guidelines",
    "Ad Choies",
    "Do Not Sell My Personal Information",
  ]
  return (
    <Box className={styles.footerBox}>
      <Container maxWidth='container.xl'>
        <Flex justifyContent={'center'}>
          <Box>
            <Flex pt='30px' gap={3} justifyContent='center'>
              {
                menuArr.map((ele) => (
                  <Text color='blue' fontSize="13px"><Link to="/">{ele}</Link></Text>
                ))
              }
            </Flex>
          </Box>
          <Box pt='30px' pl='20px'>
            <select maxWidth='150px'>
              <option>English</option>
              <option>Hindi</option>
              <option>Deutsch</option>
              <option>francais</option>
              <option>Norsk</option>
              <option>Danks</option>
              <option>Italianao</option>
            </select>
          </Box>
        </Flex>
      </Container>
      <Container>
        <Text textAlign='center' pt={5}>&copy; 2022 MyFitnessPal, Inc.</Text>
      </Container>
    </Box>

  )
}
export default FootSection;