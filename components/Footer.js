import {
    Box,
    Text,
    HStack,
    Flex,
    Heading,
} from "@chakra-ui/react";

import { SocialMediaItems } from "./Navbar";
import NextLink from "next/link";

const Footer = () => {
    return (
        <Box
            as="footer"
            borderTopWidth={1}
            px={{ base: 0, md: 5, lg: 0 }}
            color="dark.200"
            py={{ base: 5, md: 0 }}
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
                    <Flex
                        color="dark.500"
                        flexDirection="column"
                        textAlign={{ base: "center", md: "left" }}
                        py={{ base: 5, md: 0 }}
                        pt={{ base: 0, md: 3 }}
                    >

                        <HStack
                            alignItems="baseline"
                            mt={{ base: 5, md: 0 }}
                        >
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
                            mt={0}
                        >
                            &copy;&nbsp;2022&nbsp;All Rights Reserved
                        </Text>
                    </Flex>

                    <Flex
                        fontWeight="normal"
                        color="dark.100"
                        fontSize="sm"
                        justifyContent="center"
                        textAlign="center"
                        flexDirection={{ base: "column", md: "row" }}
                    >
                        <Text>Follow us:</Text>
                        <HStack
                            spacing={0}
                        >
                            {SocialMediaItems.map((item, i) => {
                                return (
                                    <NextLink key={i} href={item.href} passHref>
                                        <a>
                                            <Box
                                                as="button"
                                                fontSize="lg"
                                                h={10}
                                                w={10}
                                                transition="all .3s ease-out "
                                                _hover={{
                                                    bgColor: "primary.200",
                                                }}
                                            >
                                                <Box mt={1}>
                                                    <ion-icon name={item.icon}></ion-icon>
                                                </Box>
                                            </Box>
                                        </a>
                                    </NextLink>
                                );
                            })}
                        </HStack>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
};

export default Footer;
