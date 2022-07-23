import React, { useEffect, useState } from 'react'
import { Box, Button, Container, Flex, Input, Select, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
const Exercise = () => {
  const aToz = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const [exercise, setExercise] = useState([]);
  const [able, setAble] = useState(false);
  const [selectEx, setSelectEx] = useState();
  const [weight, setWeight] = useState();
  const [time, setTime] = useState();
  const [calorie, setCalorie] = useState(0);
  const getExercise = () => {
    fetch(`http://localhost:8080/exerciseType`)
      .then(res => res.json())
      .then(res => {
        setExercise(res);
      })
  }
  const selectChange = (e) =>{
  setSelectEx(e.target.value);
  setAble(true);
  }
  const handleWeight = (e) =>{
    let weight = e.target.value
    setWeight(weight);
  }
  const handleTime = (e) =>{
    let time = e.target.value;
    setTime(time);
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      let w = +weight;
      let t = +time;
      let cal = Math.floor((w*t)/4);
      setCalorie(cal)
    }
  }

  useEffect(() => {
    getExercise();
  }, [])
  return (
    <Box p={15}>
      <Container maxWidth='container.lg' pt={5} px={20}>
        <Text fontSize={22} fontWeight='600' color='teal.600'>Calories Burned From Exercise </Text><hr />
        <Flex>
          <Box width='50%'   >
            <Text fontSize={18} fontWeight='600' color='teal.600' mt={3}>Search our exercise database by name:</Text>
            <Flex>
              <Input size='sm' />
              <Button size='sm' colorScheme='teal'>Search</Button>
            </Flex>
            <Text fontSize={18} fontWeight='600' color='teal.600' mt={5}>Matching exercises:</Text>
            <Box border={'1px solid gray'} height="250px" mt={8}>

            </Box>
          </Box>
          <Box width='50%' height='400px' >
            <Box px={5}>
              <Text fontSize={18} fontWeight='600' color='teal.600' mt={3}>...or choose an exercise below:</Text>
              <Select onChange={selectChange} size='sm'>
                {
                  exercise.map((data) => (
                    <option key={data.id} value={data.title}>{data.title}</option>
                  ))
                }
              </Select>
              <Box width='100%' height='250px' backgroundColor={'gray.100'} mt={20} px={5} pt={4}>
                <Text textAlign={'center'} fontSize={18} fontWeight='600' color='teal.600'>How Many Calories Did I Burn?</Text>
                <Text fontSize='15px' fontWeight={600} textAlign={'center'} color='green'>{selectEx}</Text>
                <br />
                <Flex gap={2}>
                  <h4>Your&nbsp;Weight</h4>
                  <Input disabled={!able} size={'sm'} value={weight} onChange={handleWeight}/>
                  <Select size={'sm'}>
                    <option>Kilograms</option>
                    <option>Pounds</option>
                  </Select>
                </Flex>
                <br />
                <Flex gap={2}>
                  <h4>How&nbsp;Long</h4>
                  <Input disabled={!able} size={'sm'} value={time} onKeyDown={handleKeyDown} onChange={handleTime} />
                  <Select size={'sm'}>
                    <option>Minutes</option>
                  </Select>
                </Flex>
                <Text fontSize={18} fontWeight='600' color='black.600' mt={10} textAlign={'center'}>Calories burned: {calorie}</Text>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Container>
      <box>
        <Container maxW='container.lg'>
          <Text pt={10} textAlign={'center'} fontSize={18} fontWeight='600' color='teal.600'>How Many Calories Did I Burn?</Text>
          <Flex justifyContent={'center'}>
            {
              aToz.split("").map((ele) => (
                <Link to='/'><Text color={'blue'}>{ele} &nbsp;</Text></Link>
              ))
            }
          </Flex>
        </Container>
      </box>
    </Box>
  )
}

export default Exercise