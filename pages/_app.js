import { ChakraProvider } from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";
import { Global, css } from "@emotion/react";

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



function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Global styles={GlobalStyles} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
