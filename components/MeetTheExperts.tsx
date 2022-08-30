import React from "react";
import { Box, Text } from "@chakra-ui/react";
import DoctorReviews from "./DoctorReviews";

const MeetTheExperts = () => {
  return (
    <Box ml="30px">
      <Text fontSize="24px" fontWeight="bold">
        Meet the experts
      </Text>
      <DoctorReviews />
    </Box>
  );
};

export default MeetTheExperts;
