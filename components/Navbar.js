import React from "react";
import {
    Box,
    Flex,
    Text,
    Heading,
    HStack,
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

const linkColor = "dark.200";
const linkHoverColor = "primary.500";

export default function Navigation() {
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
            color={linkColor}
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
                                transition="all .2s ease-out"
                                _hover={{
                                    color: linkHoverColor
                                }}
                            >
                                {item.label}
                            </Box>
                        </a>
                    </NextLink>
                );
            })}
            <HStack spacing={5}>
                {SocialMediaItems.map((item, i) => {
                    return (
                        <NextLink key={i} href={item.href} passHref>
                            <a>
                                <Box
                                    mb={-1}
                                    transition="all .2s ease-out"
                                    fontSize="xl"
                                    _hover={{
                                        color: linkHoverColor
                                    }}
                                >
                                    <ion-icon name={item.icon} />
                                </Box>
                            </a>
                        </NextLink>
                    );
                })}
            </HStack>
        </HStack >
    );
};

const MobileNav = () => {
    return (
        <Flex
            bgColor="white"
            mt={5}
            pb={7}
            display={{ md: "none" }}
            color={linkColor}
        >
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
            <VStack spacing={6}
            >
                {SocialMediaItems.map((item, i) => {
                    return (
                        <NextLink key={i} href={item.href} passHref>
                            <a>
                                <Box
                                    mb={-1}
                                    fontSize="xl"
                                    transition="all .2s ease-out"
                                    _hover={{
                                        color: linkHoverColor
                                    }}
                                >
                                    <ion-icon name={item.icon}></ion-icon>
                                </Box>
                            </a>
                        </NextLink>
                    );
                })}
            </VStack>
        </Flex>
    );
};

const MobileNavItem = ({ label, href }) => {

    return (
        <Flex
            mt={-5}
            mb={3}
            direction="column"
            as={Link}
            href={href ?? "#"}
            justifyContent="space-between"
            alignItems="center"
            _hover={{
                textDecoration: "none",
                color: linkHoverColor
            }}>
            <Text
                fontWeight={600}
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

const SocialMediaItems = [
    {
        name: "Facebook",
        icon: "logo-facebook",
        href: "/#"
    },
    {
        name: "Twitter",
        icon: "logo-twitter",
        href: "/#"
    },
    {
        name: "Instagram",
        icon: "logo-instagram",
        href: "/#"
    }
];