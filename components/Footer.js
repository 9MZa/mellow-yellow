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
            px={{ base: 0, md: 10, lg: 0 }}
            color="dark.200"
        >
            <Box
                maxW="container.lg"
                mx="auto"
                fontWeight="medium"
            >

                <Flex
                    spacing={5}
                    justifyContent={{ md: "space-between" }}
                    flexDirection={{ base: "column-reverse", md: "row" }}
                    alignItems={{ base: "center" }}
                >
                    <HStack>
                        <Box color="dark.500" textAlign={{ base: "center", md: "left" }} >
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
                                fontSize={{ base: "xs", md: "sm" }}
                            >
                                &copy;&nbsp;2022&nbsp;All Rights Reserved
                            </Text>
                        </Box>
                    </HStack>

                    <HStack
                        fontWeight="normal"
                        color="dark.100"
                        fontSize="sm"
                        my={5}
                        flexDirection={{ base: "column", md: "row" }}
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
                        </HStack>
                    </HStack>
                </Flex>
            </Box>
        </Box>
    );
};

export default Footer;
