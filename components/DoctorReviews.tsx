import { Box, Image, Text, Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { IoRibbonOutline } from "react-icons/io5";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

const DoctorCard = () => (
  <Box minW="180px" ml="10px" color="white">
    <Box position="relative">
      <Image
        w="180px"
        h="260px"
        src="https://media.istockphoto.com/photos/taj-mahal-mausoleum-in-agra-picture-id1146517111?k=20&m=1146517111&s=612x612&w=0&h=vHWfu6TE0R5rG6DJkV42Jxr49aEsLN0ML-ihvtim8kk="
        alt=""
        borderRadius="17px"
      />
      <Box p="10px" position="absolute" top="45%">
        <Text>Dr Name</Text>
        <Text lineHeight={1.2} my="5px" fontSize="10px" w="150px">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi vel
          quam rerum soluta repellendus asperiores ipsum labore omnis, est enim!
        </Text>
        <Flex alignItems="center">
          <Icon mr="10px" as={IoRibbonOutline} w={4} h={5} color="white" />
          <Text lineHeight={1.2} w="150px" fontSize="10px">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </Text>
        </Flex>
      </Box>
    </Box>
  </Box>
);

const ReviewCard = () => (
  <Box minW="180px" ml="10px">
    <Box position="relative">
      <Image
        w="180px"
        h="260px"
        src="https://media.istockphoto.com/photos/taj-mahal-mausoleum-in-agra-picture-id1146517111?k=20&m=1146517111&s=612x612&w=0&h=vHWfu6TE0R5rG6DJkV42Jxr49aEsLN0ML-ihvtim8kk="
        alt=""
        borderRadius="17px"
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

const DoctorReviews = () => {
  return (
    <>
      <Flex mb="10px" alignItems="center">
        <Text
          fontWeight="bold"
          ml="20px"
          //   flex={1}
          textAlign="start"
          fontSize="24px"
        >
          Sex Consular
        </Text>
        <Text ml="50px" textAlign="left" color="#8D8D8D">
          reviews {"--->"}{" "}
        </Text>
      </Flex>

      <Flex>
        <Box position="sticky">
          <DoctorCard />
        </Box>

        <Flex overflow="auto">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </Flex>
      </Flex>
    </>
  );
};

export default DoctorReviews;
