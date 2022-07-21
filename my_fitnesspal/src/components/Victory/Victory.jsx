import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import slideData from './SlideArr'
import styles from './Victory.module.css'
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Victory() {
  return (
    <Box
      pt="100px"
      alignSelf="center"
      textAlign="center"
      borderRadius="10px"
    >
      <Box className={styles.victorysection}>
        <Heading fontWeight='800' size='2xl' >Victory Stories</Heading>
        <Text px={'32'} py='5'>When you reach your goals, our whole community celebrates with you. That’s over 200 million members sharing in your victory—using it to inspire their own journey.</Text>
      </Box>
      <div className={styles.flexContainer}>
        <Swiper
          slidesPerView={1}
          spaceBetween={6}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
          loop={true}
        >
          {slideData.map((e) => (
            <SwiperSlide key={e.id}>
              <Flex className={styles.flexBox}>
                <Box className={styles.imgbox}>
                  <img width='100%' height='100%' src={e.image} alt="" />
                </Box>
                <Box className={styles.textBox}>
                  <Heading fontWeight='500'>{e.title}</Heading><br /><br />
                  <Text fontSize='21px'>{e.description}</Text>
                  <br />
                  <Flex>
                    <Spacer />
                    <Heading size='md'>{e.u_name}</Heading>
                  </Flex>
                </Box>
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Box>
  );
}
