import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Carousel from "../components/Carousel";
import DoctorReviews from "../components/DoctorReviews";
import IncludedProducts from "../components/IncludedProducts";
import MeetDoctors from "../components/MeetDoctors";
import OverviewCard from "../components/OverviewCard";
import Plans from "../components/Plans";
import Section from "../components/Section";
import Welcome from "../components/Welcome";

const Home: NextPage = () => {
  return (
    <Box>
      <Welcome />
      <Section />
      <Carousel />
      <Plans />
      <Box>
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
      </Box>
      <IncludedProducts />
      <MeetDoctors />
      <DoctorReviews />
      <DoctorReviews />
      <DoctorReviews />
    </Box>
  );
};

export default Home;
