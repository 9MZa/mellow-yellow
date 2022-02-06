import { extendTheme } from "@chakra-ui/react";
import { Button } from "@/components/Button";

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
        },
        dark: {
            100: "#666666",
            200: "#4C4C4C",
            500: "#2B2B2B",
            700: "#1A1A1A",
            800: "#151515",
            900: "#000000"
        },
        gray: {
            100: "#F6F3EF",
            200: "#EFEAE4",
            500: "#D6D2CC",
            700: "#8F8C88",
            800: "#6B6966",
            900: "#474543"
        }
    },
    fonts: {
        heading: "Work Sans, sans-serif",
        body: "Open Sans, sans-serif",
        monospace: "Fira Code, monospace",
        blockquote: "STIX Two Text, serif",
    },
    components: {
        Button
    },
    styles: {
        global: (props) => ({
            "html, body": {
                // fontSize: "sm",
                // color: props.colorMode === "dark" ? "white" : "gray.600",
                // lineHeight: "tall",
            },

            h1: {
                fontSize: "5xl",
                fontFamily: "heading",
                fontWeight: "semibold"
            },
            h2: {
                fontSize: "4xl",
                fontFamily: "heading",
                fontWeight: "semibold"
            },
            h3: {
                fontSize: "3xl",
                fontFamily: "heading",
                fontWeight: "semibold"
            },
            p: {
                // color: props.colorMode === "dark" ? "teal.300" : "teal.500",
            },
            pre: {
                my: "5",
                p: "5",
                bgColor: "gray.100",
                overflow: "scroll"
            },
            ul: {
                py: "5",
                px: "10"

            },
            ol: {
                py: "5",
                px: "10"

            },
            blockquote: {
                my: "5",
                p: "5",
                color: "dark.200",
                fontFamily: "blockquote",
                fontSize: "3xl",
                fontStyle: "italic",
                bgColor: "primary.100",
                borderColor: "primary.500",
                borderLeftWidth: "4px",
            }

        }),
    },
});

export default theme;