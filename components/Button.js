export const Button = {
    // The styles all button have in common
    baseStyle: {
        rounded: "0px",
        fontWeight: "bold",
        textTransform: "capitalize",
    },
    // Two sizes: sm and md
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
    // Two variants: outline and solid
    variants: {
        outline: {

        },
        solid: {
            bgColor: "primary.500",
            border: "2px",
            borderColor: "primary.500",
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