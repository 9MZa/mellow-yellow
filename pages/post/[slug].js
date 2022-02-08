import dayjs from "dayjs";
import { gql } from "@apollo/client";
import client from "@/lib/apolloClient";
import { Box, Heading, Stack, Text, Flex, HStack, Divider } from "@chakra-ui/react";
import NextImage from "next/image";
import DateFormat from "@/components/Date";
import { CategoryBox } from "@/components/CategoryTag";
import CalcReadingTime from "@/lib/minuteRead";
import { NextSeo } from "next-seo";
import ScrollToTop from "@/components/ScrollToTop";
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
            <ScrollToTop />
            <Box
                maxW="container.lg"
                mt={10}
                px={{ base: 5, md: 5, lg: 0 }}
                mx="auto"
            >
                <Box
                    maxW="container.md"
                    mx="auto"
                >
                    <Flex
                        justifyContent="center"
                        flexDirection="column"
                        textAlign="center"
                    >
                        <CategoryBox slug={categorySlug} name={categoryName} />
                        <Heading
                            mt={{ base: 6, md: 6, lg: 10 }}
                            color="dark.500"
                            fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
                        > {title}
                        </Heading>
                    </Flex>
                    <Stack
                        mt={5}
                        justifyContent="center"
                        direction={{ base: "column", md: "row" }}
                        alignItems="center"
                    >
                        <HStack fontSize={{ base: "xs", md: "sm" }}>
                            <Text color="light.500" >By</Text>
                            <Text
                                color="dark.200"
                                fontWeight="semibold"
                            >
                                {createdName}
                            </Text>
                        </HStack>
                        <HStack fontSize={{ base: "xs", md: "sm" }}>
                            <Text display={{ base: "none", md: "flex" }} >•</Text>
                            <Text><DateFormat date={publishedAt} /></Text>
                            <Text>•</Text>
                            <Text color="light.500"><CalcReadingTime data={text} /></Text>
                        </HStack>
                    </Stack>
                    <Divider my={10} />
                </Box>

                <Box
                    position="relative"
                    h={{ base: "200px", md: "350px", lg: "400px" }}
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
