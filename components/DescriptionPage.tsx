import { Box, Flex, Icon, Text, Image } from "@chakra-ui/react";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Card = () => (
  <Box p="10px" borderRadius="29px" boxShadow="0 5px 15px #ccc" mx="10px">
    <Flex justifyContent="space-between">
      <Box>
        <Text>On Day 01</Text>
        <Flex alignItems="center">
          <Image
            w="61px"
            h="61px"
            src="https://wallpaperaccess.com/full/317501.jpg"
            alt=""
            borderRadius="50%"
            mr="10px"
          />
          <Text>Personal Assistant</Text>
        </Flex>
      </Box>
      <Icon as={AiOutlineArrowLeft} color="black" w={10} h={10} />
    </Flex>
  </Box>
);

const DescriptionPage = () => {
  return (
    <Box>
      <Card />
      <Text p="20px" textAlign="center">
        Hello Name , We are looking forward to your third diet review
        consultation call with you nutritionist join the call and get all your
        questions and queries related to your diet solved on this call. Why ls
        This Call Important? - This is the third call with your nutritionist
        after you have received your diet plans. In this call you can ask your
        nutritionist questions related to current diet plan. - Your expert has
        gone through your lifestyle, medical conditions and food habits by which
        the expert has made the necessary changes as per your requirements still
        if you are not able to follow your plan due to any reason speak to
        ourexpert on this call to get further customization of your diet plan.We
        are eager to answer all your queries and assist you with your
        nutritional and dietary concerns.
      </Text>
    </Box>
  );
};

export default DescriptionPage;
