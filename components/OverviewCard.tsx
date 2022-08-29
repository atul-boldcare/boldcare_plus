import React from "react";
import { Box, Text, Divider, Flex, Image, Icon } from "@chakra-ui/react";
import { MdCall } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";

const OverviewCard = () => {
  return (
    <Box m="10px" bg="#fff" borderRadius={30} boxShadow="0 5px 15px #ccc">
      <Flex flexDir="row" justifyContent="space-between">
        <Box pt="15px" pl="15px">
          <Text fontSize="14px">Day</Text>
          <Text fontSize="24px" fontWeight="bold">
            01
          </Text>
        </Box>
        <Box position="relative">
          <Divider orientation="vertical" height="100%" color="#000" />
          <Flex
            justifyContent="center"
            alignItems="center"
            borderWidth="1px"
            width="30px"
            height="30px"
            borderRadius={50}
            position="absolute"
            top="15px"
            left="-15px"
            bg="#fff"
          >
            <Icon as={MdCall} w={5} h={5} />
          </Flex>
        </Box>
        <Box pt="15px">
          <Text fontSize="20px">Initial Introduction Call</Text>
          <Flex my="10px" flexDir="row" alignItems="center">
            <Image
              src="https://wallpaperaccess.com/full/317501.jpg"
              alt=""
              width="50px"
              height="50px"
              borderRadius={50}
              mr="10px"
            />
            <Text fontSize="16px" width="70px">
              Personal Assistant
            </Text>
          </Flex>
        </Box>
        <Box pt="10px" pr="10px">
          <Icon as={AiOutlineArrowRight} w={8} h={8} />
        </Box>
      </Flex>
    </Box>
  );
};

export default OverviewCard;
