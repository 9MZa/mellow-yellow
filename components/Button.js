export const Button = {
    baseStyle: {
        rounded: "0px",
        fontWeight: "bold",
        textTransform: "capitalize",
    },
    sizes: {
        sm: {
            fontSize: "sm",
            px: 4,
            py: 3,
        },
        md: {
            fontSize: "md",
            px: 6,
            py: 4,
        },
    },
    variants: {
        outline: {
            border: "2px",
            borderColor: "primary.500",
            _hover: {
                bgColor: "white",
                borderColor: "primary.200",
            },
            _active: {
                bgColor: "white"
            },

        },
        solid: {
            bgColor: "primary.500",
            border: "2px",
            borderColor: "primary.500",
            color: "dark.500",
            _hover: {
                border: "2px",
                bgColor: "primary.200",
                borderColor: "primary.200",
                color: "black"
            },
            _active: {
                bgColor: "primary.500"
            },
        },
    },
    defaultProps: {
        size: "md",
        variant: "solid",
    },
};


