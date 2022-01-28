import {
    Box,
    Flex,
    Heading,
    Text,
    Image,
    SimpleGrid,
    Stack
} from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import CalcReadingTime from "@/lib/minuteRead";

const CommonCard = ({ post }) => {

    const {
        title,
        excerpt,
        publishedAt,
        slug,
        thumbnail: { url: thumbnail },
        categories: { name: categoryName, slug: categorySlug },


    } = post;

    return (
        <Box
            w="full"
            border="1px"
            borderColor="light.800"
        >
            <Box
                position="relative"
                height="230px"
                overflow="hidden"
            >
                <NextImage
                    src={thumbnail}
                    layout="fill"
                    alt={title}
                    position="absolute"
                />
            </Box>
            <Stack p={3}>
                <Flex gap={2} fontSize="sm">
                    <NextLink href={`/category/${categorySlug}`}>
                        <a>
                            <Text
                                textTransform="uppercase"
                                fontWeight="semibold"
                                fontFamily="monospace"
                                color="light.400"
                            >
                                {categoryName}

                            </Text>
                        </a>
                    </NextLink>
                    <Text><CalcReadingTime date={publishedAt} /></Text>
                </Flex>
                <NextLink href={`/post/${slug}`}>
                    <a>
                        <Heading
                            as="h2"
                            fontWeight="bold"
                            fontSize="xl"
                            fontFamily="heading"
                        >
                            {title}
                        </Heading>
                    </a>
                </NextLink>
                <Text noOfLines={3} color="light.500">{excerpt}</Text>
            </Stack>
        </Box >
    );
};


export const ThreeColumn = ({ post }) => {

    return (
        <SimpleGrid columns={3} rowGap={10} columnGap={10} >
            {post.map((item, i) => {
                return (
                    <CommonCard post={item} key={i} />
                );
            })}
        </SimpleGrid>
    );
};


