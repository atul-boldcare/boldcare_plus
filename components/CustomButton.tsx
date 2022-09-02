import { FC, ReactNode } from "react";
import { Box, Flex, SpaceProps, Text } from "@chakra-ui/react";

export interface CustomButtonProps {
  children: ReactNode;
  spaceProps?: SpaceProps;
  onClick?: () => void;
  bg?: string;
  color?: string;
  hoverColor?: string;
  activeColor?: string;
}

const CustomButton: FC<CustomButtonProps> = ({
  children,
  spaceProps = { p: "10px", m: "10px" },
  onClick,
  bg = "#000",
  color = "#fff",
  hoverColor,
  activeColor,
}) => {
  return (
    <Flex justifyContent="center" onClick={onClick}>
      <Box
        borderRadius="16px"
        {...spaceProps}
        flex={1}
        bg={bg}
        color={color}
        _hover={{ bg: hoverColor }}
        _active={{ bg: activeColor }}
      >
        <Text fontSize="24px" textAlign="center">
          {children}
        </Text>
      </Box>
    </Flex>
  );
};

export default CustomButton;
