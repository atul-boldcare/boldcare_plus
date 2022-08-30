import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Card = () => {
  return (
    <Box bg="#000" my="15px" p="30px" borderRadius="29px">
      <Box>
        <Flex>
          <Icon color="#C28916DE" as={FaCheckCircle} w="73px" h="73px" />
          <Box ml="10px" color="white">
            <Text>4 Consultations with </Text>
            <Text color="#C28916DE">Expert Sexologists</Text>
            <Text w="80%" bg="#fff" color="#000">
              Worth &#8377;2000{" "}
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box mt="10px">
        <Text color="white">
          5,00,000+ users have trusted Bold Care to solve their problems in the
          last 2 years. We are the largest & most trusted digital sexual
          wellness company in India.
        </Text>
      </Box>
    </Box>
  );
};

const HowThePlanWorks = () => {
  return (
    <Box m="10px" mt="20px">
      <Text fontWeight="bold" fontSize="16px">
        How the plan works
      </Text>
      <Text my="27px">
        We’ve created a high-efficacy performance plan to let you to choose your
        own solution. So what’s included in the 3-month Gameplan?
      </Text>
      <Card />
      <Card />
      <Card />
      <Card />
    </Box>
  );
};

export default HowThePlanWorks;
