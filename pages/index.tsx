import { Box, Text, Flex, Button } from "@chakra-ui/react";
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
import DescriptionPage from "../components/DescriptionPage";
import CustomButton from "../components/CustomButton";
import WhatYouGet from "../components/WhatYouGet";
import OverviewCard2 from "../components/OverviewCard2";

const Home: NextPage = () => {
  return (
    <Box>
      <Welcome />
      <Section />
      <PlanDescription />
      <Carousel />
      <NewPlan />
      <CustomButton activeColor="#000000C2">
        Contact us for queries
      </CustomButton>
      <IncludedProducts />
      <MeetDoctors />
      <MeetTheExperts />
      <OverView />
      {/* <DescriptionPage /> */}
      {/* <OverviewCard /> */}
      {/* <PlanDescription /> */}
      {/* <NewPlan /> */}
      {/* <HowThePlanWorks /> */}
      {/* <DoctorCard2 /> */}
      {/* <Carousel /> */}
      {/* <WhatYouGet /> */}
      {/* <OverviewCard2 /> */}
    </Box>
  );
};

export default Home;
