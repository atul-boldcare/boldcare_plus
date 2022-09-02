import React from "react";
import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";

const OverviewCard2 = () => {
  return (
    <Flex
      mx="20px"
      mt="5px"
      boxShadow="0 5px 15px #ccc"
      borderRadius="29px"
      justifyContent="space-between"
    >
      <Box flexBasis="100px" flexShrink={0}>
        <Image
          src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
          alt=""
          h="120px"
          w="100%"
          borderLeftRadius="29px"
        />
      </Box>
      <Box>
        <Text fontSize="24px" fontWeight="bold">
          Today
        </Text>
        <Text fontSize="20px" color="#008A49">
          Initial introduction call
        </Text>
        <Text>Personal Assistant</Text>
      </Box>
      <Box>
        <Box transform="rotate(-45deg)" mt="5px" mr="5px">
          <Icon as={AiOutlineArrowRight} color="#008A49" w={8} h={8} />
        </Box>
      </Box>
    </Flex>
  );
};

export default OverviewCard2;
