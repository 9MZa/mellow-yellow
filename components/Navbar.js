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
            minH={"60px"}
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
        <Flex>
            {NAV_ITEMS.map((item, i) => {
                return (
                    <li key={i}> {item.label} </li>
                );
            })}
        </Flex>
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
