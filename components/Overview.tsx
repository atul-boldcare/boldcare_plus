import React from "react";
import { Box, Text } from "@chakra-ui/react";
import OverviewCard from "./OverviewCard";

const OverView = () => {
  return (
    <Box mt="20px">
      <Text ml="20px" fontSize="24px">
        <b>Overview</b> of my <b>90-day</b> journey
      </Text>
      <OverviewCard />
      <OverviewCard />
      <OverviewCard />
      <OverviewCard />
    </Box>
  );
};

export default OverView;
