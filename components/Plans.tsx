import { Box, Grid, Flex, Text, BorderProps, Button } from "@chakra-ui/react";
import { FC, useState } from "react";

export interface GridItemProps {
  children?: React.ReactNode;
  borderProps?: BorderProps;
  withBg?: boolean;
  isCentered?: boolean;
  isCenterAligned?: boolean;
}

const GridItem: FC<GridItemProps> = ({
  children,
  borderProps,
  withBg = true,
  isCentered = true,
  isCenterAligned = true,
}) => (
  <Flex
    {...borderProps}
    justifyContent={isCentered ? "center" : "flex-start"}
    alignItems={isCenterAligned ? "center" : "flex-end"}
    w="100%"
    minH="100px"
    bg={withBg ? "#FFECC7" : "none"}
  >
    {children}
  </Flex>
);

const Plan = () => (
  <Flex color="#000" flexDir="column" alignItems="center">
    <Text fontWeight="bold">1</Text>
    <Text color="#FFDD6DDE">worth</Text>
    <Text fontWeight="bold">&#8377;800</Text>
  </Flex>
);

const PlanPrice = () => (
  <Flex color="#fff" flexDir="column" alignItems="center">
    <Text as="s">&#8377;2499</Text>
    <Text fontWeight="bold" color="#FFDD6DDE">
      {"20% Off"}
    </Text>
    <Text fontWeight="bold">&#8377;1999</Text>
  </Flex>
);

const borderProps = {
  borderColor: "#fff",
  borderWidth: "2px",
  borderTopWidth: 0,
  borderBottomWidth: 0,
};

const topBorderProps = {
  borderTopRadius: "20px",
  borderColor: "#fff",
  borderWidth: "2px",
  borderBottomWidth: 0,
};

const bottomBorderProps = {
  borderBottomRadius: "20px",
  borderColor: "#fff",
  borderWidth: "2px",
  borderTopWidth: 0,
};

const Plans = () => {
  const [activePlan, setActivePlan] = useState<1 | 3 | 6>(1);
  return (
    <Box bg="brown" color="white" p="5px">
      <Grid
        gap="1px"
        templateColumns="repeat(4, 1fr)"
        templateRows="repeat(7, 1fr)"
        m="10px"
      >
        {/* Row 1 */}
        <GridItem withBg={false} />
        <GridItem
          withBg={false}
          borderProps={activePlan === 1 ? topBorderProps : {}}
        >
          <Text
            alignSelf="flex-end"
            textAlign="center"
            width="50px"
            wordBreak="break-word"
          >
            1 Month
          </Text>
        </GridItem>
        <GridItem
          withBg={false}
          borderProps={activePlan === 3 ? topBorderProps : {}}
        >
          <Text
            alignSelf="flex-end"
            textAlign="center"
            width="50px"
            wordBreak="break-word"
          >
            3 Month
          </Text>
        </GridItem>
        <GridItem
          withBg={false}
          borderProps={activePlan === 6 ? topBorderProps : {}}
        >
          <Text
            alignSelf="flex-end"
            textAlign="center"
            width="50px"
            wordBreak="break-word"
          >
            6 Month
          </Text>
        </GridItem>

        {/* Row 2 */}
        <GridItem withBg={false} isCentered={false}>
          <Text>Expert Consultations</Text>
        </GridItem>
        <GridItem
          borderProps={
            activePlan === 1
              ? { borderTopLeftRadius: "30px", ...borderProps }
              : { borderTopLeftRadius: "30px" }
          }
        >
          <Plan />
        </GridItem>
        <GridItem borderProps={activePlan === 3 ? borderProps : {}}>
          <Plan />
        </GridItem>
        <GridItem
          borderProps={
            activePlan === 6
              ? { borderTopRightRadius: "30px", ...borderProps }
              : { borderTopRightRadius: "30px" }
          }
        >
          <Plan />
        </GridItem>

        {/* Row 3 */}
        <GridItem withBg={false} isCentered={false}>
          <Text>Effective Medications</Text>
        </GridItem>
        <GridItem borderProps={activePlan === 1 ? borderProps : {}}>
          <Plan />
        </GridItem>
        <GridItem borderProps={activePlan === 3 ? borderProps : {}}>
          <Plan />
        </GridItem>
        <GridItem borderProps={activePlan === 6 ? borderProps : {}}>
          <Plan />
        </GridItem>

        {/* Row 4 */}
        <GridItem withBg={false} isCentered={false}>
          <Text>Therapy Sessions</Text>
        </GridItem>
        <GridItem borderProps={activePlan === 1 ? borderProps : {}}>
          <Plan />
        </GridItem>
        <GridItem borderProps={activePlan === 3 ? borderProps : {}}>
          <Plan />
        </GridItem>
        <GridItem borderProps={activePlan === 6 ? borderProps : {}}>
          <Plan />
        </GridItem>

        {/* Row 5 */}
        <GridItem withBg={false} isCentered={false}>
          <Text>Personal Assistant</Text>
        </GridItem>
        <GridItem
          borderProps={
            activePlan === 1
              ? { borderBottomLeftRadius: 0, ...borderProps }
              : { borderBottomLeftRadius: "30px" }
          }
        >
          <Plan />
        </GridItem>
        <GridItem borderProps={activePlan === 3 ? borderProps : {}}>
          <Plan />
        </GridItem>
        <GridItem
          borderProps={
            activePlan === 6
              ? { borderBottomRightRadius: "30px", ...borderProps }
              : { borderBottomRightRadius: "30px" }
          }
        >
          <Plan />
        </GridItem>

        {/* Row 6 */}
        <GridItem withBg={false} />
        <GridItem
          withBg={false}
          borderProps={activePlan === 1 ? borderProps : {}}
        >
          <PlanPrice />
        </GridItem>
        <GridItem
          withBg={false}
          borderProps={activePlan === 3 ? borderProps : {}}
        >
          <PlanPrice />
        </GridItem>
        <GridItem
          withBg={false}
          borderProps={activePlan === 6 ? borderProps : {}}
        >
          <PlanPrice />
        </GridItem>
        {/* Row 7 */}
        <GridItem withBg={false} />
        <GridItem
          withBg={false}
          borderProps={activePlan === 1 ? bottomBorderProps : {}}
        >
          <Button
            alignSelf="flex-start"
            flex={1}
            borderRadius="15px"
            color="#000"
          >
            BUY
          </Button>
        </GridItem>
        <GridItem
          withBg={false}
          borderProps={activePlan === 3 ? bottomBorderProps : {}}
        >
          <Button
            alignSelf="flex-start"
            flex={1}
            borderRadius="15px"
            color="#000"
          >
            BUY
          </Button>
        </GridItem>
        <GridItem
          withBg={false}
          borderProps={activePlan === 6 ? bottomBorderProps : {}}
        >
          <Button
            alignSelf="flex-start"
            flex={1}
            borderRadius="15px"
            color="#000"
          >
            BUY
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Plans;
