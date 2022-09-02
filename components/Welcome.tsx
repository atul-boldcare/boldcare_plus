import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Welcome = () => {
  return (
    <Box p="30px" pt="15px" pb="15px">
      <Text fontWeight="bold" fontSize="34px">
        Welcome to
      </Text>
      <Text fontWeight="bold" lineHeight={1} fontSize="40px">
        BoldCare<span style={{ color: "#C28916DE" }}>Pro</span>
      </Text>
    </Box>
  );
};

export default Welcome;
