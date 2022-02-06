import {
    HStack,
    Box,
    Text,
    Flex,
    Button
} from "@chakra-ui/react";
import NextLink from "next/link";

export const CategoryText = ({ name, slug }) => {

    return (
        <NextLink href={`/category/${slug}`}>
            <a>
                <Text
                    fontWeight="semibold"
                    _hover={{
                    }}
                >
                    {name}
                </Text>
            </a>
        </NextLink>
    );
};



export const CategoryBox = ({ name, slug }) => {
    return (
        <NextLink href={`/category/${slug}`}>
            <Flex justifyContent="center">
                <Button>
                    <Text
                        _hover={{
                            color: "dark.500"
                        }}
                    >
                        {name}
                    </Text>
                </Button>
            </Flex>
        </NextLink>
    );
};
