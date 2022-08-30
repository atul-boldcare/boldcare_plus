import { Box, Image, Text, Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ReviewCard = () => (
  <Box minW="180px" ml="10px" mt="10px">
    <Box position="relative">
      <Image
        w="180px"
        h="260px"
        src="https://media.istockphoto.com/photos/taj-mahal-mausoleum-in-agra-picture-id1146517111?k=20&m=1146517111&s=612x612&w=0&h=vHWfu6TE0R5rG6DJkV42Jxr49aEsLN0ML-ihvtim8kk="
        alt=""
        borderRadius="18px"
      />
      <Box p="10px" color="white" position="absolute" top="45%">
        <Text>Name</Text>
        <Flex>
          <Icon as={AiFillStar} w={4} h={4} color="white" />
          <Icon as={AiFillStar} w={4} h={4} color="white" />
          <Icon as={AiFillStar} w={4} h={4} color="white" />
          <Icon as={AiFillStar} w={4} h={4} color="white" />
          <Icon as={AiOutlineStar} w={4} h={4} color="white" />
        </Flex>
        <Text fontSize="10px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          accusantium possimus ad laudantium culpa, magnam vel animi doloremque
          dicta sapiente?
        </Text>
      </Box>
    </Box>
  </Box>
);

export default ReviewCard;
