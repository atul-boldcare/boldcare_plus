import { Grid, Flex, Text, BorderProps, Button } from "@chakra-ui/react";
import { FC } from "react";

export interface GridItemProps {
  children?: React.ReactNode;
  borderProps?: BorderProps;
  withBg?: boolean;
}

const GridItem: FC<GridItemProps> = ({
  children,
  borderProps,
  withBg = true,
}) => (
  <Flex
    {...borderProps}
    justifyContent="center"
    alignItems="center"
    w="100%"
    h="100px"
    bg={withBg ? "#C8C8C8" : "none"}
  >
    {children}
  </Flex>
);

const Plans = () => {
  return (
    <>
      <Grid
        gap="2px"
        templateColumns="repeat(4, 1fr)"
        templateRows="repeat(6, 1fr)"
        m="10px"
      >
        {/* 1 */}
        <GridItem withBg={false} />
        {/* 2 */}
        <GridItem withBg={false}>
          <Text>1 Month</Text>
        </GridItem>
        {/* 3 */}
        <GridItem withBg={false}>
          <Text>3 Month</Text>
        </GridItem>
        {/* 4 */}
        <GridItem withBg={false}>
          <Text>6 Month</Text>
        </GridItem>
        {/* 5 */}
        <GridItem withBg={false}>
          <Text>Expert Consultations</Text>
        </GridItem>

        {/* 6 */}
        <GridItem borderProps={{ borderTopLeftRadius: "30px" }} />
        {/* 7 */}
        <GridItem />
        {/* 8 */}
        <GridItem borderProps={{ borderTopRightRadius: "30px" }} />
        {/* 9 */}
        <GridItem withBg={false}>
          <Text>Effective Medications</Text>
        </GridItem>

        {/* 10 */}
        <GridItem />
        {/* 11 */}
        <GridItem />
        {/* 12 */}
        <GridItem />
        {/* 13 */}
        <GridItem withBg={false}>
          <Text>Therapy Sessions</Text>
        </GridItem>
        {/* 14 */}
        <GridItem />
        {/* 15 */}
        <GridItem />
        {/* 16 */}
        <GridItem />
        {/* 17 */}
        <GridItem withBg={false}>
          <Text>Personal Assistant</Text>
        </GridItem>
        {/* 18 */}
        <GridItem borderProps={{ borderBottomLeftRadius: "30px" }} />
        {/* 19 */}
        <GridItem />
        {/* 20 */}
        <GridItem borderProps={{ borderBottomRightRadius: "30px" }} />
        {/* 21 */}
        <GridItem withBg={false} />
        {/* 22 */}
        <GridItem withBg={false}>
          <Button flex={1} borderRadius="15px" bg="#000" color="#fff">
            BUY
          </Button>
        </GridItem>
        {/* 23 */}
        <GridItem withBg={false}>
          <Button flex={1} borderRadius="15px" bg="#000" color="#fff">
            BUY
          </Button>
        </GridItem>
        {/* 24 */}
        <GridItem withBg={false}>
          <Button flex={1} borderRadius="15px" bg="#000" color="#fff">
            BUY
          </Button>
        </GridItem>
      </Grid>
    </>
  );
};

export default Plans;
