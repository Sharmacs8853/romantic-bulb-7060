import React, { useState } from 'react'
import { Box, Button, Flex, Heading, Image, Input, Text } from '@chakra-ui/react'
import { SearchIcon, SmallCloseIcon } from '@chakra-ui/icons';
import Recipes from '../components/Recipes/Recipes';
const Food = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);
  
  const getData = () => {
    fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${text}&pageSize=${page}&api_key=VbH2yXFcNCuUain5v2AhjEC1DkQAXyBMjvof1N5F`)
      .then(res => res.json())
      .then(res => {
        setData(res.foods)
        console.log(res.foods)
      }).catch(err=>{
        console.log(err);
      })
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      getData();
    }
  }
  const handleNext=()=>{
    setPage(page+1);
    getData();
  }
  const handlePre = () =>{
    setPage(page-1);
    getData();
  }
  const clear = () =>{
    setData([]);
    setText("");
  }
  return (
    <Box>
    <Flex minHeight={'600px'} px='200px' py='50px'>
        
      <Box width={'70%'}>
        <Flex p={2} gap={1} justifyContent='space-evenly' boxShadow={' rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'} >
          <Box><Button><SearchIcon onClick={getData} /></Button></Box>
          <Box><Input value={text} onKeyDown={handleKeyDown} onChange={(e)=>{setText(e.target.value)}} placeholder='Search for food, brand and Nutrients ' minWidth={'550px'} border='none' /></Box>
          <Box><Button onClick={clear}><SmallCloseIcon /></Button></Box>
        </Flex>
        <Box mt='10px' textAlign={'center'}>
        {
          text==="" 
          ? 
          <Box>
            <Image width={'100%'} px='100px' src='https://www.myfitnesspal.com/_next/static/media/food-search.ca9350e8.svg' />
            <Heading>Food Analysis</Heading>
            <Text px={100}>Understand how the food you’re eating contributes to your daily calories, macronutrients, and micronutrients.</Text>
          </Box>
          :
          <Box >
            {
              data.map((ele) => (
                <Box style={{ textTransform: "capitalize", color:"blue" }}>{ele.lowercaseDescription} - {ele.brandName}
                <Text textAlign={'left'}>Nutrients:</Text>
                  {
                   
                    <Flex direction={'column'} flexWrap='wrap' gap={2}><ul>{
                      ele.foodNutrients.map((e) => (
                        <Text style={{fontSize:"13px",textAlign:"left", color:"black"}}><li> {e.nutrientName} - {e.nutrientNumber}<span style={{textTransform:"lowercase"}}>{e.unitName}</span></li></Text>
                      ))
                    }
                    </ul>
                    </Flex>
                  }
                </Box>
              ))
            }
          </Box>
          
        }
        </Box>
        <Box>
          <Button disabled={page===0} onClick={handlePre}>Pre</Button>
          {page}
          <Button onClick={handleNext}>Next</Button>
        </Box>
      </Box>
      <Box width={'30%'} backgroundColor='gray.200'></Box>
    </Flex>
    <Recipes/>
    </Box>
  )
}
export default Food

