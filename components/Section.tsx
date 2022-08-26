import { Box, Text, Flex, Image, Icon } from "@chakra-ui/react";
import React, { useState, FC } from "react";
import { AiOutlineArrowRight, AiOutlineArrowDown } from "react-icons/ai";

const images = [
  "https://wallpaperaccess.com/full/317501.jpg",
  "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
];

export interface SubSectionTextProps {
  text: string;
  background: string;
  textColor: string;
  isActive: boolean;
}

const SubSectionText: FC<SubSectionTextProps> = ({
  text,
  background,
  textColor,
  isActive,
}) => {
  return (
    <Box
      // width="170px"
      borderRadius="10px"
      bg={background}
      borderBottomRadius={isActive ? 0 : "10px"}
      boxShadow={isActive ? "none" : "0 5px 15px #ccc"}
      m="10px"
    >
      <Flex dir="row" alignItems="center" pb="10px">
        <Text maxW="150px" p="10px" fontSize="24px" color={textColor}>
          {text}
        </Text>
        <Icon
          transition="transform .2s"
          transform={isActive ? "rotate(90deg)" : "rotate(0)"}
          as={AiOutlineArrowRight}
          color={isActive ? "white" : "black"}
          w="32px"
          h="32px"
        />
      </Flex>
    </Box>
  );
};

const Section = () => {
  const [active, setActive] = useState(3);

  const clickHandler = (index: number) => {
    if (index === 0) setActive(1);
    else setActive(0);
  };

  return (
    <Box w="100%" mx="auto" zIndex={10}>
      <Flex mt="5px" flexDir="row" justifyContent="space-between">
        <Box
          position="relative"
          // top={active === 0 ? "10px" : "0"}
          onClick={() => clickHandler(active)}
          transition="all .2s"
          transform={active === 0 ? "translateY(10px)" : "translateY(0)"}
        >
          <SubSectionText
            text="Better Sex from Day 1"
            background={active === 0 ? "#000" : "#fff"}
            textColor={active === 0 ? "#fff" : "#000"}
            isActive={active === 0}
          />
        </Box>
        <Box
          position="relative"
          // top={active === 1 ? "10px" : "0"}
          onClick={() => clickHandler(active)}
          transition="transform .2s"
          transform={active === 1 ? "translateY(10px)" : "translateY(0)"}
        >
          <SubSectionText
            text="Last Longer in Bed"
            background={active === 1 ? "#000" : "#fff"}
            textColor={active === 1 ? "#fff" : "#000"}
            isActive={active === 1}
          />
        </Box>
      </Flex>

      <Box mx="auto" zIndex={20}>
        <Box onClick={() => clickHandler(active)}>
          <Image
            src={images[active]}
            alt="alt text"
            width="100%"
            height="350px"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Section;
