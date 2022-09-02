import { FC } from "react";
import { Box, Image, Flex, Text, Icon, chakra } from "@chakra-ui/react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import AnimationBox from "./AnimationBox";

const images = [
  "https://wallpaperaccess.com/full/317501.jpg",
  "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
  "https://media.istockphoto.com/photos/taj-mahal-mausoleum-in-agra-picture-id1146517111?k=20&m=1146517111&s=612x612&w=0&h=vHWfu6TE0R5rG6DJkV42Jxr49aEsLN0ML-ihvtim8kk=",
];

export interface CarouselItemProps {
  src: string;
}

const CarouselItem: FC<CarouselItemProps> = ({ src }) => (
  <Box
    minW="90%"
    my="30px"
    ml="10px"
    boxShadow="0 5px 15px #ccc"
    borderRadius="29px"
  >
    <Box position="relative">
      <Image
        filter="brightness(70%)"
        borderRadius="29px"
        src={src}
        alt=""
        w="100vw"
        h="300px"
      />
      <Box position="absolute" top="55%" left="20px">
        <Text lineHeight={1.2} fontSize="24px" color="white">
          Your <br></br> <b>Performance</b>
        </Text>
        <Flex flexDir="row">
          <Icon as={AiFillStar} w={8} h={8} color="white" />
          <Icon as={AiFillStar} w={8} h={8} color="white" />
          <Icon as={AiFillStar} w={8} h={8} color="white" />
          <Icon as={AiFillStar} w={8} h={8} color="white" />
          <Icon as={AiOutlineStar} w={8} h={8} color="white" />
        </Flex>
        <Text lineHeight={1.1} fontSize="14px" color="white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          ea!
        </Text>
      </Box>
    </Box>
  </Box>
);

const Carousel = () => {
  return (
    <Box>
      <Text ml="10px" fontSize="24px" m="10px">
        <b>Real</b> People, <b>Real</b> Reviews
      </Text>
      <AnimationBox>
        <Flex overflow="auto">
          <CarouselItem src={images[0]} />
          <CarouselItem src={images[1]} />
          <CarouselItem src={images[2]} />
        </Flex>
      </AnimationBox>
    </Box>
  );
};

export default Carousel;
