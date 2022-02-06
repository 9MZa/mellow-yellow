import dayjs from "dayjs";
import { gql } from "@apollo/client";
import client from "@/lib/apolloClient";
import { Box, Heading, Stack, Text, Flex, HStack, Divider } from "@chakra-ui/react";
import NextImage from "next/image";
import DateFormat from "@/components/Date";
import { CategoryBox } from "@/components/CategoryTag";
import CalcReadingTime from "@/lib/minuteRead";
import { NextSeo } from "next-seo";

const PostSlug = ({ posts }) => {

    const { title, publishedAt, excerpt, slug,
        categories: { name: categoryName, slug: categorySlug },
        thumbnail: { url: thumbnailURL },
        createdBy: { name: createdName, picture: createdImage },
        content: { html: body, text }
    } = posts[0];

    return (
        <>
            <NextSeo
                title={title}
                description={excerpt}
                openGraph={{
                    title: title,
                    description: excerpt,
                    images: [
                        {
                            url: thumbnailURL,
                            width: 800,
                            height: 600,
                            alt: "Og Image Alt",
                            type: "image/jpeg",
                        },
                    ],
                }}
            />
            <Box
                maxW="container.lg"
                mt={10}
                mb={20}
                mx="auto"
            >
                <Box
                    maxW="container.md"
                    mx="auto"
                >
                    <Stack
                        spacing={14}
                        my={10}
                        textAlign="center"
                    >
                        <CategoryBox slug={categorySlug} name={categoryName} />
                        <Heading color="dark.500" size="2xl"> {title} </Heading>
                        <HStack
                            justifyContent="center"
                            spacing={5}
                            color="dark.100"
                            textTransform="capitalize"
                        >
                            <HStack>
                                <Text color="light.500" >By</Text>
                                <Text
                                    color="dark.200"
                                    fontWeight="semibold"
                                >
                                    {createdName}
                                </Text>
                            </HStack>
                            <HStack color="light.500" spacing={5}>
                                <Text>•</Text>
                                <Text><DateFormat date={publishedAt} /></Text>
                                <Text>•</Text>
                            </HStack>


                            <Text color="light.500"><CalcReadingTime data={text} /></Text>
                        </HStack>
                    </Stack>
                    <Divider my={10} />
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
        </>
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
                excerpt
                publishedAt
                content {
                    html
                    text
                }
                categories {
                    name
                    slug
                }
                thumbnail {
                    url
                }
                createdBy{
                    name
                    picture
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
