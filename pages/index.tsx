import { Box, Text, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Carousel from "../components/Carousel";
import DoctorCard2 from "../components/DoctorCard2";
import DoctorReviews from "../components/DoctorReviews";
import HowThePlanWorks from "../components/HowThePlanWorks";
import IncludedProducts from "../components/IncludedProducts";
import MeetDoctors from "../components/MeetDoctors";
import MeetTheExperts from "../components/MeetTheExperts";
import NewPlan from "../components/NewPlan";
import OverView from "../components/Overview";
import PlanDescription from "../components/PlanDescription";
import Plans from "../components/Plans";
import Section from "../components/Section";
import Welcome from "../components/Welcome";

const Home: NextPage = () => {
  return (
    <Box>
      <Welcome />
      <Section />
      <PlanDescription />
      <Carousel />
      <NewPlan />
      <Flex justifyContent="center">
        <Box
          borderRadius="16px"
          p="15px"
          mx="20px"
          flex={1}
          bg="#000"
          color="#fff"
          _hover={{ bg: "#040404" }}
          _active={{ bg: "#000000C2" }}
        >
          <Text fontSize="24px" textAlign="center">
            Contact us for queries
          </Text>
        </Box>
      </Flex>
      <IncludedProducts />
      <MeetDoctors />
      <MeetTheExperts />
      <OverView />
      {/* <DescriptionPage /> */}
      {/* <OverviewCard /> */}
      {/* <PlanDescription /> */}
      {/* <NewPlan /> */}
      <HowThePlanWorks />
      {/* <DoctorCard2 /> */}
    </Box>
  );
};

export default Home;
