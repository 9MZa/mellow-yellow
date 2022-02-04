import dayjs from "dayjs";
import { gql } from "@apollo/client";
import client from "@/lib/apolloClient";
import { Box, Heading, Stack, Text, Flex, HStack } from "@chakra-ui/react";
import NextImage from "next/image";
import DateFormat from "@/components/Date";
const PostSlug = ({ posts }) => {

    const { title, publishedAt,
        categories: { name: categoryName, slug: categroySlug },
        thumbnail: { url: thumbnailURL },
        createdBy: { name: createdBy },
        content: { html: body }
    } = posts[0];

    return (
        <Box
            maxW="container.lg"
            mt={10}
            mx="auto"
        >
            <Box
                maxW="container.md"
                mx="auto"
            >
                <Stack spacing={5} my={10} textAlign="center">
                    <Heading size="2xl"> {title} </Heading>
                    <HStack justifyContent="center" spacing={5}>
                        <Text> by {createdBy} </Text>
                        <Text>In {categoryName}</Text>
                        <Text><DateFormat date={publishedAt} /></Text>
                    </HStack>
                </Stack>
            </Box>

            <Box
                position="relative"
                h="400px"
                w="100%"
            >
                <NextImage
                    position="absolute"
                    layout="fill"
                    src={thumbnailURL}
                    objectFit="cover"
                />
            </Box>

            <Box
                maxW="container.md"
                mx="auto"
                mt={10}
            >
                <div dangerouslySetInnerHTML={{ __html: body }} />
            </Box>


        </Box>
    );
};

export default PostSlug;

export async function getStaticPaths() {
    const { data } = await client.query({
        query: gql`query{
            posts {
                slug
            }
        }`
    });
    const { posts } = data;
    const paths = posts.map(posts => ({
        params: { slug: posts.slug }
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const slug = params.slug;
    const { data } = await client.query({
        query: gql`
            query getPostBySlug ($slug: String!) {
            posts (where: {slug: $slug},stage:PUBLISHED) {
                slug
                title
                publishedAt
                content {
                    html
                }
                categories {
                    name
                }
                thumbnail {
                    url
                }
                createdBy{
                    name
                }
            }
        }`,
        variables: { slug }
    });
    const { posts } = data;

    return {
        props: { posts }
    };
}
