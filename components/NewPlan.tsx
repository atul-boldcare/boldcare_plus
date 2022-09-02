import { Box, Flex, Image, Text, BorderProps, Button } from "@chakra-ui/react";
import { FC, useState } from "react";

export interface PlanDetailProps {
  text?: string;
}

export interface ContainerProps {
  month: 1 | 3 | 6;
}

export interface PlanContainerProps {
  borderProps?: BorderProps;
}

const PlanDetail: FC<PlanDetailProps> = ({ text }) => (
  <Flex
    flexDir="column"
    m="5px"
    color="#fff"
    // flexBasis="100px"
  >
    <Image
      src="https://via.placeholder.com/150"
      alt=""
      w="45px"
      h="45px"
      borderRadius="50%"
      m="5px"
      ml="0"
    />
    <Text lineHeight={1}>{text}</Text>
  </Flex>
);

const PriceContainer = () => (
  <Flex
    flexBasis="100px"
    color="#fff"
    flexDir="column"
    justifyContent="center"
    alignItems="center"
  >
    <Text as="s">&#8377;2499</Text>
    <Text fontWeight="bold" color="#FFDD6DDE">
      {"20% Off"}
    </Text>
    <Text fontWeight="bold">&#8377;1999</Text>
  </Flex>
);

const PlanContainer: FC<PlanContainerProps> = ({ borderProps }) => (
  <Flex
    flexBasis="100px"
    m="1px"
    bg="#FFECC7"
    color="#000"
    flexDir="column"
    alignItems="center"
    justifyContent="center"
    {...borderProps}
  >
    <Text fontWeight="bold">1</Text>
    <Text color="#FFDD6DDE">worth</Text>
    <Text fontWeight="bold">&#8377;800</Text>
  </Flex>
);

const PlanDetailContainer = () => (
  <Flex color="#000" flexDir="column" alignItems="flex-start">
    <PlanDetail />
    <PlanDetail text="Expert Consultation" />
    <PlanDetail text="Therapist Consultation" />
    <PlanDetail text="Nutrition Session" />
    <PlanDetail text="Products worth" />
    {/* <PlanDetail />
    <PlanDetail /> */}
  </Flex>
);

const Container: FC<ContainerProps> = ({ month }) => {
  return (
    <Flex flexDir="column">
      <Flex
        mb="5px"
        lineHeight={1}
        flexDir="column"
        alignItems="center"
        color="#fff"
        p="5px"
      >
        <Text>{month}</Text>
        <Text>Month</Text>
      </Flex>
      <PlanContainer
        borderProps={
          month === 1
            ? { borderTopLeftRadius: "20px" }
            : month === 6
            ? { borderTopRightRadius: "20px" }
            : {}
        }
      />
      <PlanContainer />
      <PlanContainer />
      <PlanContainer
        borderProps={
          month === 1
            ? { borderBottomLeftRadius: "20px" }
            : month === 6
            ? { borderBottomRightRadius: "20px" }
            : {}
        }
      />
      <PriceContainer />
      <Flex justifyContent="flex-end" p="5px">
        <Button borderRadius="23px" flex={1} colorScheme="gray">
          BUY
        </Button>
      </Flex>
    </Flex>
  );
};

const NewPlan = () => {
  const [activePlan, setActivePlan] = useState<1 | 3 | 6>(3);

  return (
    <Box bg="brown" px="10px" py="30px">
      <Flex justifyContent="space-around">
        <Box flexBasis="100px">
          <PlanDetailContainer />
        </Box>
        <Box
          flexBasis="100px"
          border={activePlan === 1 ? "2px solid white" : "none"}
          borderRadius="23px"
          onClick={() => setActivePlan(1)}
          borderTopWidth="0"
        >
          <Container month={1} />
        </Box>
        <Box
          flexBasis="100px"
          border={activePlan === 3 ? "2px solid white" : "none"}
          borderRadius="23px"
          onClick={() => setActivePlan(3)}
          borderTopWidth="0"
        >
          <Container month={3} />
        </Box>
        <Box
          flexBasis="100px"
          border={activePlan === 6 ? "2px solid white" : "none"}
          borderRadius="23px"
          onClick={() => setActivePlan(6)}
          borderTopWidth="0"
        >
          <Container month={6} />
        </Box>
      </Flex>
    </Box>
  );
};

export default NewPlan;
