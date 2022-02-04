import {
    Box,
    SimpleGrid,
    Button,
    Flex, Icon
} from "@chakra-ui/react";
import { ReadButton } from "@/components/ReadMore";
import { CommonCard, WideCard, Big } from "@/components/Card";

export const ThreeColumn = ({ post }) => {

    return (
        <Box maxW="container.lg" mx="auto" my={10}>
            <SimpleGrid columns={3} rowGap={10} columnGap={10} >
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
            my={10}
            maxW="container.lg"
            mx="auto"
        >
            <WideCard post={post} />
        </Box>
    );
};

export const SingleBig = ({ post }) => {
    return (
        <Box
            my={10}
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