import { Box, Text, Flex } from "@chakra-ui/react";
import React from "react";
import ReviewCard from "./ReviewCard";
import DoctorCard2 from "./DoctorCard2";

const DoctorReviews = () => {
  return (
    <Box>
      <Box my="25px">
        <DoctorCard2 />
      </Box>

      <Flex overflow="auto">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </Flex>
    </Box>
  );
};

export default DoctorReviews;
