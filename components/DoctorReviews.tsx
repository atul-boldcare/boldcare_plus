import { Box, Text, Flex } from "@chakra-ui/react";
import React from "react";
import ReviewCard from "./ReviewCard";
import DoctorCard2 from "./DoctorCard2";
import AnimationBox from "./AnimationBox";

const DoctorReviews = () => {
  return (
    <Box>
      <Box my="25px">
        <DoctorCard2 />
      </Box>

      <AnimationBox translateX={30}>
        <Flex overflow="auto">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </Flex>
      </AnimationBox>
    </Box>
  );
};

export default DoctorReviews;
