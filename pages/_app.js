import { ChakraProvider } from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";
import { Global, css } from "@emotion/react";
import Layout from "@/components/Layout";
import theme from "../theme";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import Script from "next/script";
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
    <ChakraProvider theme={theme}>
      <Layout>
        <DefaultSeo {...SEO} />
        <Global styles={GlobalStyles} />
        <Component {...pageProps} />
        <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" />
        <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
