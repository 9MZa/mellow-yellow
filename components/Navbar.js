import React from "react";
import {
    Box,
    Flex,
    Text,
    Stack,
    Button,
    Icon,
    Link,
    Collapse,
    Popover,
    PopoverTrigger,
    IconButton,
    PopoverContent,
    useDisclosure,
    useBreakpointValue,
    Heading,
    UnorderedList,
    ListItem,
    VStack,
    HStack
} from "@chakra-ui/react";


import NextLink from "next/link";

const Logo = () => {
    return (
        <NextLink href="/">
            <a>
                <Box>
                    <Heading>Logo</Heading>
                    <Box p={0.5} bgColor="primary.500" />
                </Box>
            </a>
        </NextLink>
    );
};

export default function Navbar() {
    return (
        <Flex
            maxW="container.lg"
            bg="white"
            pt={2}
            pb={5}
            mx="auto"
            justifyContent="space-between"
        >
            <Logo />
            <DesktopNav />
        </Flex>
    );
}

const DesktopNav = () => {
    return (
        <HStack
            spacing={10}
            fontWeight="medium"
            color="dark.100"
        >
            {NAV_ITEMS.map((item, i) => {
                return (
                    <NextLink
                        key={i}
                        href={item.href}
                        passHref >
                        <a>
                            <Box
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
        </HStack>
    );
};



const NAV_ITEMS = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "All Post",
        href: "/post",
    },
    {
        label: "Category",
        href: "#",
        children: [
            {
                label: "Basic",
                subLabel: "Trending Design to inspire you",
                href: "/category/basic",
            },
            {
                label: "Learn",
                subLabel: "Up-and-coming Designers",
                href: "/category/learn",
            },
        ],
    },

];
