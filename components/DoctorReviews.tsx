import { Box, Text, Flex } from "@chakra-ui/react";
import React from "react";
import ReviewCard from "./ReviewCard";
import DoctorCard from "./DoctorCard";

const DoctorReviews = () => {
  return (
    <>
      <Flex mb="10px" alignItems="center">
        <Text fontWeight="bold" ml="20px" textAlign="start" fontSize="24px">
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
