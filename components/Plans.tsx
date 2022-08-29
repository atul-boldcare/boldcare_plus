import {
  Box,
  Grid,
  Flex,
  Text,
  BorderProps,
  Button,
  TextProps,
} from "@chakra-ui/react";
import { FC } from "react";

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

const Plans = () => {
  return (
    <Box bg="brown" color="white" p="5px">
      <Grid
        // gap="2px"
        templateColumns="repeat(4, 1fr)"
        templateRows="repeat(7, 1fr)"
        m="10px"
      >
        {/* Row 1 */}
        <GridItem withBg={false} />
        <GridItem withBg={false}>
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
          borderProps={{
            borderTopRadius: "20px",
            borderColor: "#fff",
            borderWidth: "2px",
            borderBottomWidth: 0,
          }}
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
        <GridItem withBg={false}>
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
        <GridItem borderProps={{ borderTopLeftRadius: "30px" }}>
          <Plan />
        </GridItem>
        <GridItem
          borderProps={{
            borderColor: "#fff",
            borderWidth: "2px",
            borderTopWidth: 0,
            borderBottomWidth: 0,
          }}
        >
          <Plan />
        </GridItem>
        <GridItem borderProps={{ borderTopRightRadius: "30px" }}>
          <Plan />
        </GridItem>

        {/* Row 3 */}
        <GridItem withBg={false} isCentered={false}>
          <Text>Effective Medications</Text>
        </GridItem>
        <GridItem>
          <Plan />
        </GridItem>
        <GridItem
          borderProps={{
            borderColor: "#fff",
            borderWidth: "2px",
            borderTopWidth: 0,
            borderBottomWidth: 0,
          }}
        >
          <Plan />
        </GridItem>
        <GridItem>
          <Plan />
        </GridItem>

        {/* Row 4 */}
        <GridItem withBg={false} isCentered={false}>
          <Text>Therapy Sessions</Text>
        </GridItem>
        <GridItem>
          <Plan />
        </GridItem>
        <GridItem
          borderProps={{
            borderColor: "#fff",
            borderWidth: "2px",
            borderTopWidth: 0,
            borderBottomWidth: 0,
          }}
        >
          <Plan />
        </GridItem>
        <GridItem>
          <Plan />
        </GridItem>

        {/* Row 5 */}
        <GridItem withBg={false} isCentered={false}>
          <Text>Personal Assistant</Text>
        </GridItem>
        <GridItem borderProps={{ borderBottomLeftRadius: "30px" }}>
          <Plan />
        </GridItem>
        <GridItem
          borderProps={{
            borderColor: "#fff",
            borderWidth: "2px",
            borderTopWidth: 0,
            borderBottomWidth: 0,
          }}
        >
          <Plan />
        </GridItem>
        <GridItem borderProps={{ borderBottomRightRadius: "30px" }}>
          <Plan />
        </GridItem>

        {/* Row 6 */}
        <GridItem withBg={false} />
        <GridItem withBg={false}>
          <PlanPrice />
        </GridItem>
        <GridItem
          withBg={false}
          borderProps={{
            borderColor: "#fff",
            borderWidth: "2px",
            borderTopWidth: 0,
            borderBottomWidth: 0,
          }}
        >
          <PlanPrice />
        </GridItem>
        <GridItem withBg={false}>
          <PlanPrice />
        </GridItem>
        {/* Row 7 */}
        <GridItem withBg={false} />
        <GridItem withBg={false}>
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
          borderProps={{
            borderBottomRadius: "20px",
            borderColor: "#fff",
            borderWidth: "2px",
            borderTopWidth: 0,
          }}
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
        <GridItem withBg={false}>
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
