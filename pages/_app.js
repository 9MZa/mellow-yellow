import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";
import { Global, css } from "@emotion/react";
import Layout from "@/components/Layout";
const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus    via the mouse,
    but it will still show up on keyboard focus.
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
     outline: none;
     box-shadow: none;
   }

`;


const theme = extendTheme({
  colors: {
    primary: {
      100: "#FFF8D9",
      200: "#FFE166",
      500: "#FFCD00",
      700: "#E5B800",
      800: "#735C00",
      900: "#4C3D00"
    },
    light: {
      100: "#737373",
      200: "#8C8C8C",
      500: "#999999",
      700: "#B3B3B3",
      800: "#E5E5E5",
      900: "#FFFFFF"
    }
  },
});





function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Global styles={GlobalStyles} />
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
