import { Box, Text } from "@chakra-ui/react";


const Footer = () => {
    return (
        <Box
            as="footer"
            borderTopWidth={1}
            py={4}
        >
            <Box
                maxW="container.lg"
                mx="auto"
                fontWeight="semibold"
            >
                <Text>Name 2020 Copyright All Rights Reserved.</Text>
            </Box>
        </Box>
    );
};

export default Footer;
