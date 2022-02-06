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
                pt={2}
                pb={5}
                mx="auto"
                justifyContent="space-between"
            >
                <Logo />
                <Flex display={{ base: "none", md: "flex" }}>
                    <DesktopNav />
                </Flex>

                <Flex display={{ base: "block", md: "none" }} >
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
                <Icon as={FaFacebookF} />
                <Icon as={FaTwitter} />
                <Icon as={SiInstagram} />
            </HStack>
        </HStack>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg="white"
            p={4}
            display={{ md: "none" }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? "#"}
                justify={"space-between"}
                align={"center"}
                _hover={{
                    textDecoration: "none",
                }}>
                <Text
                    fontWeight={600}
                    color="gray.600"
                >
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={"all .25s ease-in-out"}
                        transform={isOpen ? "rotate(180deg)" : ""}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={"solid"}
                    borderColor="gray.200"
                    align={"start"}>
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
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
    // {
    //     label: "Category",
    //     href: "#",
    //     children: [
    //         {
    //             label: "Basic",
    //             subLabel: "Trending Design to inspire you",
    //             href: "/category/basic",
    //         },
    //         {
    //             label: "Learn",
    //             subLabel: "Up-and-coming Designers",
    //             href: "/category/learn",
    //         },
    //     ],
    // },

];
