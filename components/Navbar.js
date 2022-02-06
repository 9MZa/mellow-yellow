import React from "react";
import {
    Box,
    Flex,
    Icon,
    Heading,
    HStack,
} from "@chakra-ui/react";

import { FaTwitter, } from "@react-icons/all-files/fa/FaTwitter";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { SiInstagram } from "@react-icons/all-files/si/SiInstagram";
import { IoSearch } from "@react-icons/all-files/io5/IoSearch";
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
                <Icon as={FaLinkedinIn} />
                <Icon as={IoSearch} />
            </HStack>
        </HStack>
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
