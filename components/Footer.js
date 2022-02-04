import { Box, Text } from "@chakra-ui/react";


const Footer = () => {
    return (
        <Box
            as="footer"
            bg="white"
            py={4}
        >
            <Box
                maxW="container.lg"
                mx="auto"
            >
                <Text>Footer</Text>
            </Box>
        </Box>
    );
};

export default Footer;
