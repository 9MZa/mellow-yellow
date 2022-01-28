import { extendTheme } from "@chakra-ui/react";

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
    fonts: {
        heading: "Work Sans, sans-serif",
        body: "Open Sans, sans-serif",
        monospace: "Fira Code, monospace"
    },
    styles: {
        global: (props) => ({
            "html, body": {
                // fontSize: "sm",
                // color: props.colorMode === "dark" ? "white" : "gray.600",
                // lineHeight: "tall",
            },
            p: {
                // color: props.colorMode === "dark" ? "teal.300" : "teal.500",
            },
            pre: {
                border: "1px",
                padding: "2rem",
                bgColor: "red.50"

            }
        }),
    },
});

export default theme;