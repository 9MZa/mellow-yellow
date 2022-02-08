import {
    Box,
    SimpleGrid,
    Flex,
} from "@chakra-ui/react";
import { ReadButton } from "@/components/ReadMore";
import { CommonCard, WideCard, Big } from "@/components/Card";

export const ThreeColumn = ({ post }) => {

    return (
        <Box
            maxW="container.lg"
            mx="auto"
            my={10}
            px={{ base: 4, md: 4, lg: 0 }}
        >
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} rowGap={10} columnGap={10} >
                {post.map((item, i) => {
                    return (
                        <CommonCard post={item} key={i} />
                    );
                })}
            </SimpleGrid>
        </Box>
    );
};



export const SingleWide = ({ post }) => {
    return (
        <Box
            mt={20}
            mb={10}
            maxW="container.lg"
            mx="auto"
            px={{ base: 4, md: 4, lg: 0 }}
        >
            <WideCard post={post} />
        </Box>
    );
};

export const SingleBig = ({ post }) => {
    return (
        <Box
            px={{ base: 4, md: 4, lg: 0 }}
            maxW="container.lg"
            mx="auto"
        >
            <Big post={post} />
            <Flex justifyContent="center" my={10}>
                <ReadButton url="/post/" text="more" />
            </Flex>

        </Box>
    );
};