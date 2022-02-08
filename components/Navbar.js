import React from "react";
import {
    Box,
    Flex,
    Icon,
    Text,
    Heading,
    HStack,
    Stack,
    Link,
    Collapse,
    VStack,
    useDisclosure,
    IconButton,
} from "@chakra-ui/react";

import {
    CloseIcon,
    HamburgerIcon,
} from "@chakra-ui/icons";

import { FaTwitter, } from "@react-icons/all-files/fa/FaTwitter";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { SiInstagram } from "@react-icons/all-files/si/SiInstagram";
import NextLink from "next/link";

const Logo = () => {
    return (
        <NextLink href="/">
            <a>
                <Box color="dark.500">
                    <HStack>
                        <Heading>mellow</Heading>
                        <Heading
                            color="primary.500">
                            yellow
                        </Heading>
                    </HStack>
                </Box>
            </a>
        </NextLink>
    );
};

export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box>
            <Flex
                bg="white"
                maxW="container.lg"
                py={{ base: 2, md: 3 }}
                px={{ base: 3, md: 3, lg: 0 }}
                mx="auto"
                justifyContent="space-between"
            >
                <Logo />
                <Flex display={{ base: "none", md: "flex" }}>
                    <DesktopNav />
                </Flex>

                <Flex
                    zIndex={20}
                    display={{ base: "block", md: "none" }}
                    mr={-2}
                >
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={"ghost"}
                        aria-label={"Toggle Navigation"}
                    />
                </Flex>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    return (
        <HStack
            spacing={10}
            fontWeight="medium"
            color="dark.100"
            fontFamily="heading"
        >
            {NAV_ITEMS.map((item, i) => {
                return (
                    <NextLink
                        key={i}
                        href={item.href}
                        passHref >
                        <a>
                            <Box
                                transition="all .1s ease-out"
                                _hover={{
                                    color: "dark.500"
                                }}
                            >
                                {item.label}
                            </Box>
                        </a>
                    </NextLink>
                );
            })}
            <HStack spacing={5}>
                <Link>
                    <Icon as={FaFacebookF} />
                </Link>
                <Link>
                    <Icon as={FaTwitter} />
                </Link>
                <Link>
                    <Icon as={SiInstagram} />
                </Link>
            </HStack>
        </HStack>
    );
};

const MobileNav = () => {
    return (
        <Flex
            bgColor="white"
            mt={5}
            pb={7}
            display={{ md: "none" }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
            <VStack spacing={4}  >
                <Link>
                    <Icon as={FaFacebookF} />
                </Link>
                <Link>
                    <Icon as={FaTwitter} />
                </Link>
                <Link>
                    <Icon as={SiInstagram} />
                </Link>
            </VStack>
        </Flex>
    );
};

const MobileNavItem = ({ label, href }) => {

    return (
        <Flex
            mt={-5}
            direction="column"
            as={Link}
            href={href ?? "#"}
            justifyContent="space-between"
            alignItems="center"
            _hover={{
                textDecoration: "none",
            }}>
            <Text
                fontWeight={600}
                color="gray.600"
            >
                {label}
            </Text>
        </Flex>
    );
};

const NAV_ITEMS = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Post",
        href: "/post",
    },

];
