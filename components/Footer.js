import {
    Box,
    Text,
    Icon,
    HStack,
    Flex,
    Heading,
    Link
} from "@chakra-ui/react";
import { FaTwitter, } from "@react-icons/all-files/fa/FaTwitter";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { SiInstagram } from "@react-icons/all-files/si/SiInstagram";

const Footer = () => {
    return (
        <Box
            as="footer"
            borderTopWidth={1}
            py={4}
            color="dark.200"
        >
            <Box
                maxW="container.lg"
                mx="auto"
                fontWeight="medium"
            >

                <Flex spacing={5} justifyContent="space-between">
                    <HStack>
                        <Box color="dark.500">
                            <HStack alignItems="baseline">
                                <Heading size="lg">mellow</Heading>
                                <Heading
                                    color="primary.500"
                                    size="lg"
                                >
                                    yellow
                                </Heading>

                            </HStack>
                            <Text
                                color="dark.100"
                                fontWeight="normal"
                                fontSize="sm"
                            >
                                &copy;&nbsp;2022&nbsp;All Rights Reserved
                            </Text>
                        </Box>
                    </HStack>

                    <HStack
                        fontWeight="normal"
                        color="dark.100"
                        fontSize="sm"
                    >
                        <Text>Follow us:</Text>
                        <HStack spacing={0}>
                            <Link href="">
                                <Box
                                    as="button"
                                    w="10"
                                    h="10"
                                    transition="all .3s ease-out "
                                    _hover={{
                                        bgColor: "primary.200",
                                    }}
                                >
                                    <Icon as={FaFacebookF} />
                                </Box>
                            </Link>
                            <Link href="">
                                <Box
                                    as="button"
                                    w="10"
                                    h="10"
                                    transition="all .3s ease-out "
                                    _hover={{
                                        bgColor: "primary.200",
                                    }}
                                >
                                    <Icon as={FaTwitter} />
                                </Box>
                            </Link>
                            <Link href="">
                                <Box
                                    as="button"
                                    w="10"
                                    h="10"
                                    transition="all .3s ease-out "
                                    _hover={{
                                        bgColor: "primary.200",
                                    }}
                                >
                                    <Icon as={SiInstagram} />
                                </Box>
                            </Link>

                            <Link href="">
                                <Box
                                    as="button"
                                    w="10"
                                    h="10"
                                    transition="all .3s ease-out "
                                    _hover={{
                                        bgColor: "primary.200",
                                    }}
                                >
                                    <Icon as={FaLinkedinIn} />
                                </Box>
                            </Link>
                        </HStack>
                    </HStack>
                </Flex>
            </Box>
        </Box>
    );
};

export default Footer;
