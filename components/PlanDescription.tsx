import { Box, Text, Heading, Flex, Icon } from "@chakra-ui/react";
import { FC } from "react";
import { IconType } from "react-icons";
import { AiFillTrophy } from "react-icons/ai";
import { ImArrowUp } from "react-icons/im";
import { GiHealthNormal } from "react-icons/gi";

export interface ResultsProps {
  icon: IconType;
  text: string;
}

const Results: FC<ResultsProps> = ({ icon, text }) => (
  <Flex my="20px">
    <Icon mr="20px" as={icon} w={6} h={6} color="black" />
    <Text>- {text}.</Text>
  </Flex>
);

const PlanDescription = () => {
  return (
    <Box mx="20px" my="30px" color="#000">
      <Box mb="15px">
        <Heading mb="5px" fontSize="24px" as="h2">
          Get better erections!
        </Heading>
        <Text fontSize="14px">
          Bold Care+ is a 360* program that brings the best products, doctors,
          counsellors and nutrition experts under one program to help 5,00,000+
          men achieve more confidence in bed.
        </Text>
      </Box>
      <Box mb="15px">
        <Heading mb="5px" fontSize="24px" as="h2">
          Scientifically Proven Results
        </Heading>
        <Text fontSize="14px">
          5,00,000+ users have trusted Bold Care to solve their problems in the
          last 2 years. We are the largest {"&"} most trusted digital sexual
          wellness company in India.
        </Text>
      </Box>
      <Results icon={AiFillTrophy} text="95%+ success rate for program" />
      <Results
        icon={ImArrowUp}
        text="Helps you perform 4x better, using holistic products"
      />
      <Results
        icon={GiHealthNormal}
        text="Doctors + Counsellors + Lifestyle & Nutrition coaches in one place"
      />
    </Box>
  );
};

export default PlanDescription;
