import { Box, Divider, Flex, Icon, Text, Image } from "@chakra-ui/react";
import React from "react";
import { MdCall } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";

const OverviewCard = () => {
  return (
    <Box
      my="15px"
      mx="10px"
      p="15px"
      borderRadius="29px"
      boxShadow="0 5px 15px #ccc"
    >
      <Flex justifyContent="space-between">
        <Flex>
          <Flex
            position="relative"
            justifyContent="space-between"
            alignItems="start"
          >
            <Box textAlign="center" mr="10px">
              <Text fontSize="14px">Day</Text>
              <Text fontWeight="bold" fontSize="24px">
                01
              </Text>
            </Box>
            <Flex flexDirection="column">
              <Box
                position="relative"
                w="30px"
                h="30px"
                border="1px solid #000"
                borderRadius="50%"
              >
                <Icon
                  position="absolute"
                  top="4px"
                  left="4px"
                  as={MdCall}
                  w={5}
                  h={5}
                />
              </Box>
              <Box>
                <Divider
                  position="absolute"
                  left="53px"
                  color="#000"
                  orientation="vertical"
                  bg="#000"
                  // top="30px"
                />
              </Box>
            </Flex>
          </Flex>
          <Box ml="10px">
            <Flex flexDir="column">
              <Text fontSize="20px">Initial Introduction Call</Text>
              <Flex alignItems="center">
                <Image
                  src="https://wallpaperaccess.com/full/317501.jpg"
                  alt=""
                  borderRadius="50%"
                  w="44px"
                  h="44px"
                  mr="10px"
                />
                <Text fontSize="16px" w="100px">
                  Personal Assistant
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Flex>
        <Icon as={AiOutlineArrowRight} w={8} h={8} />
      </Flex>
    </Box>
  );
};

export default OverviewCard;
