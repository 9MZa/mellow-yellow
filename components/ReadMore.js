import { Box, Text, Heading, Flex, Button, Icon } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

export const ReadButton = ({ url, text }) => {
    return (
        <NextLink href={url} passHref>
            <a>
                <Button
                    role="group"
                >
                    <Text textTransform="capitalize" >
                        {text}
                    </Text>
                    <Icon
                        as={ChevronRightIcon}
                        w={6}
                        h={6}
                        opacity="100%"
                        transition="all .2s ease-out"
                        transform={"translateX(4px)"}
                        _groupHover={{ transform: "translateX(10px)" }}
                    />
                </Button>
            </a>
        </NextLink>
    );
};


export const Readmore = ({ url, text }) => {
    return (
        <NextLink href={url} passHref>
            <a>
                <Flex
                    role="group"
                    alignItems="center"
                >
                    <Text
                        textTransform="capitalize"
                        transition="all .2s ease-out"
                        color="light.100"
                        fontSize="sm"
                        fontWeight="semibold"
                        _groupHover={{
                            color: "dark.200",
                        }}
                    >
                        {text}
                    </Text>
                    <Icon
                        as={ChevronRightIcon}
                        w={5}
                        h={5}
                        opacity="0%"
                        transition="all .2s ease-out"
                        transform={"translateX(1px)"}
                        color="primary.500"
                        _groupHover={{
                            transform: "translateX(3px)",
                            opacity: "100%"
                        }}
                    />
                </Flex>
            </a>
        </NextLink>
    );
};
