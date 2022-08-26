import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: `'Poppins', 'sans-serif'`,
    body: `'Poppins', 'sans-serif'`,
  },
  textStyles: {
    h1: {
      fontSize: "39px",
    },
    h2: {
      fontSize: "36px",
    },
    h3: {
      fontSize: "25px",
    },
    h4: {
      fontSize: "20px",
    },
    body1: {
      fontSize: "16px",
    },
    body2: {
      fontSize: "12px",
    },
    subtitle: {
      fontSize: "10px",
    },
    button: {
      fontSize: "20px",
    },
  },
});
