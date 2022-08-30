import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const DoctorCard2 = () => {
  return (
    <Box>
      <Flex>
        <Image
          src="https://via.placeholder.com/150"
          alt=""
          w="72px"
          h="72px"
          borderRadius="50%"
        />
        <Flex flexDir="column" ml="10px">
          <Text fontSize="24px" fontWeight="bold">
            Your Sexologists
          </Text>
          <Text fontSize="14px">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default DoctorCard2;
