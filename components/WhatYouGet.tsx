import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const Card = () => (
  <Box maxW="150px" borderRadius="17px" m="5px" mx="auto">
    <Box position="relative">
      <Image
        src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg"
        alt=""
        w="100%"
        h="180px"
        borderRadius="17px"
      />
      <Flex color="white" position="absolute" top="70%" alignItems="center">
        <Text fontSize="24px" mx="5px">
          01
        </Text>
        <Box>
          <Text lineHeight={1} fontSize="16px">
            Expert <br></br> Consultation
          </Text>
          <Text fontSize="12px">Worth 1000</Text>
        </Box>
      </Flex>
    </Box>
  </Box>
);

const WhatYouGet = () => {
  return (
    <Box>
      <Flex flexWrap="wrap">
        <Card />
        <Card />
        <Card />
        <Card />
      </Flex>
    </Box>
  );
};

export default WhatYouGet;
