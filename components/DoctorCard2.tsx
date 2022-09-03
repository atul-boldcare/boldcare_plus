import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const DoctorCard2 = () => {
  return (
    <Box mx="30px">
      <Flex>
        <Image
          src="https://via.placeholder.com/150"
          alt=""
          w="72px"
          h="72px"
          borderRadius="50%"
        />
        <Flex flexDir="column" ml="20px">
          <Text fontSize="24px" fontWeight="bold">
            Your Sexologists
          </Text>
          <Text fontSize="14px">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </Flex>
      </Flex>
      <Flex
        bg="#000"
        color="#fff"
        mt="5px"
        justifyContent="space-between"
        alignItems="center"
        p="5px"
      >
        <Text>2 Consultation worth 1000</Text>
        <Text>3 month plan</Text>
      </Flex>
    </Box>
  );
};

export default DoctorCard2;
