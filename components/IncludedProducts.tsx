import { Box, Image, Flex, Text, Icon } from "@chakra-ui/react";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Card = () => {
  return (
    <Box
      boxShadow="0 5px 15px #ccc"
      my="10px"
      mx="auto"
      bg="#fff"
      borderRadius="20px"
      maxW="180px"
    >
      <Box position="relative">
        <Image
          borderRadius="20px"
          src="https://wallpaperaccess.com/full/317501.jpg"
          width="180px"
          height="180px"
          alt=""
        />
      </Box>
      <Flex p="10px" flexDir="row" justifyContent="space-between">
        <Text fontWeight="bold">Product Name</Text>
        <Text pr="5px" fontWeight="bold">
          100
        </Text>
      </Flex>
      <Box position="absolute" top="10px" right="10px">
        <Icon as={AiOutlineArrowRight} w={8} h={8} />
      </Box>
    </Box>
  );
};

const IncludedProducts = () => {
  return (
    <Box mx="auto">
      <Text mx="20px" fontSize="24px" fontWeight="bold">
        The product that are included
      </Text>
      <Flex flexDir="row" flexWrap="wrap">
        <Card />
        <Card />
        <Card />
        <Card />
      </Flex>
    </Box>
  );
};

export default IncludedProducts;
