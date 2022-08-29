import { Box, Image, Flex, Text, Icon } from "@chakra-ui/react";
import { FC } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const images = [
  "https://wallpaperaccess.com/full/317501.jpg",
  "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
  "https://media.istockphoto.com/photos/taj-mahal-mausoleum-in-agra-picture-id1146517111?k=20&m=1146517111&s=612x612&w=0&h=vHWfu6TE0R5rG6DJkV42Jxr49aEsLN0ML-ihvtim8kk=",
];

export interface CarouselItemProps {
  src: string;
}

const CarouselItem: FC<CarouselItemProps> = ({ src }) => (
  <Box minW="90%" m="10px" boxShadow="0 5px 15px #ccc" borderRadius="29px">
    <Box position="relative">
      <Image
        filter="brightness(50%)"
        borderRadius="29px"
        src={src}
        alt=""
        w="100vw"
        h="300px"
      />
      <Text
        lineHeight={1.2}
        fontSize="24px"
        position="absolute"
        bottom="90px"
        left="40px"
        color="white"
        px="10px"
      >
        Your <b>Performance</b>
      </Text>
      <Box position="absolute" bottom="50px" left="30px">
        <Flex flexDir="row">
          <Icon as={AiFillStar} w={10} h={10} color="white" />
          <Icon as={AiFillStar} w={10} h={10} color="white" />
          <Icon as={AiFillStar} w={10} h={10} color="white" />
          <Icon as={AiFillStar} w={10} h={10} color="white" />
          <Icon as={AiOutlineStar} w={10} h={10} color="white" />
        </Flex>
      </Box>
      <Text
        lineHeight={1.1}
        position="absolute"
        bottom="20px"
        left="30px"
        color="white"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
        ea!
      </Text>
    </Box>
  </Box>
);

const Carousel = () => {
  return (
    <Box>
      <Text ml="10px" fontSize="24px" m="10px">
        <b>Real</b> People, <b>Unreal</b> Stories
      </Text>
      <Flex overflow="auto">
        <CarouselItem src={images[0]} />
        <CarouselItem src={images[1]} />
        <CarouselItem src={images[2]} />
      </Flex>
    </Box>
  );
};

export default Carousel;
