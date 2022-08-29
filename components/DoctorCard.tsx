import { Box, Image, Text, Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { IoRibbonOutline } from "react-icons/io5";

const DoctorCard = () => (
  <Box
    minW="180px"
    ml="10px"
    color="black"
    minH="260px"
    boxShadow="0 5px 15px #ccc"
    borderRadius="18px"
    position="relative"
  >
    <Box>
      <Image
        w="100%"
        h="50%"
        src="https://media.istockphoto.com/photos/taj-mahal-mausoleum-in-agra-picture-id1146517111?k=20&m=1146517111&s=612x612&w=0&h=vHWfu6TE0R5rG6DJkV42Jxr49aEsLN0ML-ihvtim8kk="
        alt=""
        borderRadius="18px"
        borderBottomRadius="none"
      />
      <Box p="10px" top="45%">
        <Text fontWeight="bold" fontSize="24px" lineHeight={1}>
          Dr. Natesh
        </Text>
        <Flex alignItems="center" position="absolute" bottom="10px">
          <Icon mr="10px" as={IoRibbonOutline} w={4} h={5} color="black" />
          <Text lineHeight={1.2} w="150px" fontSize="10px">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </Text>
        </Flex>
      </Box>
    </Box>
  </Box>
);

export default DoctorCard;
