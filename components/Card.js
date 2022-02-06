import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Grid,
    GridItem
} from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import CalcReadingTime from "@/lib/minuteRead";
import { Readmore } from "@/components/ReadMore";
import { CategoryText } from "@/components/CategoryTag";

export const CommonCard = ({ post }) => {
    const {
        title,
        excerpt,
        publishedAt,
        content: { text },
        slug,
        thumbnail: { url: thumbnail },
        categories: { name: categoryName, slug: categorySlug },
    } = post;
    return (
        <Box
            w="full"
            borderColor="light.800"
            boxShadow="xs"
        >
            <Box
                position="relative"
                height="180px"
                overflow="hidden"
            >
                <NextImage
                    src={thumbnail}
                    layout="fill"
                    alt={title}
                    position="absolute"
                    objectFit="cover"
                    blurDataURL={thumbnail}
                    placeholder="blur"
                />
            </Box>
            <Stack p={3}>
                <Flex
                    gap={2}
                    fontSize="xs"
                    justifyContent="space-between"
                    color="dark.100"
                >
                    <CategoryText name={categoryName} slug={categorySlug} />
                    <Text >
                        <CalcReadingTime data={text} />
                    </Text>
                </Flex>
                <NextLink href={`/post/${slug}`}>
                    <a>
                        <Heading
                            as="h2"
                            fontWeight="bold"
                            fontSize="xl"
                            fontFamily="heading"
                            noOfLines={2}
                            color="dark.500"
                        >
                            {title}
                        </Heading>
                    </a>
                </NextLink>
                <Text fontSize="sm" noOfLines={3} color="light.700">{excerpt}</Text>
            </Stack>
        </Box >
    );
};



export const WideCard = ({ post }) => {

    const { title, excerpt, slug,
        thumbnail: { url: thumbnail },
        categories: { name: categoryName, slug: categorySlug },
        createdBy: { name: createdBy }
    } = post[0];

    return (
        <Box boxShadow="xs" >
            <Flex
                flexDirection={{
                    base: "column-reverse",
                    md: "row"
                }}
            >
                <Stack
                    w="100%"
                    spacing={5}
                    pt={8}
                    px={10}
                >
                    <Heading
                        color="dark.500"
                        noOfLines={2}
                        size="lg"
                    >
                        {title}
                    </Heading>
                    <Text fontSize="md" color="light.700" noOfLines={2}> {excerpt} </Text>
                    <Flex justifyContent="space-between" >
                        <Text fontSize="sm" color="light.100">by {createdBy}</Text>
                        <Readmore url={`/post/${slug}`} text="read more" />
                    </Flex>
                </Stack>

                <Box
                    h="250px"
                    w="100%"
                    position="relative"
                >
                    <NextImage
                        src={thumbnail}
                        layout="fill"
                        objectFit="cover"
                        blurDataURL={thumbnail}
                        placeholder="blur"
                    />
                </Box>
            </Flex>

        </Box>
    );
};


export const Big = ({ post }) => {

    const { title, excerpt,
        thumbnail: { url: thumbnail },
        categories: { name: categoryName, slug: categorySlug },
        createdBy: { name: createdBy }
    } = post[0];

    return (
        <Flex
            alignItems="center"
            bgColor="gray.50"
            flexDirection={{ base: "column-reverse", md: "row" }}
        >
            <Stack
                w={{ base: "100%", md: "50%" }}
                p={{ base: 2, md: 10 }}
                spacing={5}
            >
                <Heading color="dark.500"> {title} </Heading>
                <Text color="light.500" noOfLines={3} > {excerpt} </Text>
            </Stack>
            <Box
                w={{ base: "100%", md: "50%" }}
            >
                <Box
                    position="relative"
                    w="full"
                    h="400px"
                >
                    <NextImage
                        src={thumbnail}
                        layout="fill"
                        objectFit="cover"
                        blurDataURL={thumbnail}
                        placeholder="blur"
                    />
                </Box>
            </Box>
        </Flex >
    );
};
