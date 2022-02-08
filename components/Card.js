import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
} from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import CalcReadingTime from "@/lib/minuteRead";
import { Readmore } from "@/components/ReadMore";
import { CategoryText } from "@/components/CategoryTag";

export const CommonCard = ({ post }) => {
    const {
        title,
        excerpt, createdBy: { name: createdBy },
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
            <Box p={3}>
                <Flex
                    fontSize={{ base: "xs" }}
                    justifyContent="space-between"
                    color="dark.100"
                    mt={-3}
                    mb={-1}
                >
                    <CategoryText name={categoryName} slug={categorySlug} />
                    <Text>
                        <CalcReadingTime data={text} />
                    </Text>
                </Flex>
                <NextLink href={`/post/${slug}`} passHref>
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
                <Flex
                    justifyContent="space-between"
                    display={{ base: "flex", md: "flex" }}
                    fontSize={{ base: "xs", md: "xs" }}
                    mt={-4}
                    mb={-3}
                >
                    <Text color="light.100">by {createdBy}</Text>
                    <Readmore url={`/post/${slug}`} text="read more" />
                </Flex>
            </Box>
        </Box >
    );
};



export const WideCard = ({ post }) => {

    const { title, excerpt, slug,
        content: { text },
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
                <Flex
                    alignItems="center"
                    w={{ base: "100%", md: "50%", lg: "55%" }}
                    px={{ base: 3, md: 5, lg: 10 }}
                    pt={{ base: 0, md: 8 }}
                >
                    <Box>
                        <Flex
                            fontSize={{ base: "xs", md: "sm" }}
                            my={4}
                            justifyContent="space-between"
                            color="dark.100"
                            mt={1}
                            mb={-1}
                            display={{ base: "flex", md: "none" }}
                        >
                            <CategoryText name={categoryName} slug={categorySlug} />
                            <Text >
                                <CalcReadingTime data={text} />
                            </Text>
                        </Flex>
                        <NextLink href={`/post/${slug}`} passHref>
                            <a>
                                <Heading
                                    color="dark.500"
                                    noOfLines={2}
                                    size="lg"
                                >
                                    {title}
                                </Heading>
                            </a>
                        </NextLink>
                        <Text
                            fontSize={{ base: "sm", md: "md" }}
                            my={{ base: 2, md: 2, lg: 4 }}
                            color="light.700"
                            noOfLines={{ base: 3, md: 3, lg: 2 }}
                        >
                            {excerpt}
                        </Text>
                        <Flex
                            justifyContent="space-between"
                            fontSize={{ base: "xs", md: "sm" }}
                        >
                            <Text color="light.100">by {createdBy}</Text>
                            <Readmore url={`/post/${slug}`} text="read more" />
                        </Flex>
                    </Box>
                </Flex>

                <Box
                    h={{ base: "200px", md: "250px", lg: "250px" }}
                    w={{ base: "100%", md: "50%", lg: "45%" }}
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

    const { title, excerpt, slug,
        content: { text },
        thumbnail: { url: thumbnail },
        categories: { name: categoryName, slug: categorySlug },
        createdBy: { name: createdBy }
    } = post[0];

    return (
        <Flex
            alignItems="center"
            bgColor={{ base: "white", md: "gray.50" }}
            flexDirection={{ base: "column-reverse", md: "row" }}
            boxShadow={{ base: "xs", md: "none" }}
        >

            <Stack
                w={{ base: "100%", md: "50%" }}
                px={{ base: 4, md: 5, lg: 8 }}
                spacing={{ base: 2, md: 5 }}

            >
                <Flex
                    fontSize={{ base: "xs", md: "sm" }}
                    justifyContent="space-between"
                    color="dark.100"
                >
                    <CategoryText name={categoryName} slug={categorySlug} />
                    <Text  >
                        <CalcReadingTime data={text} />
                    </Text>
                </Flex>
                <NextLink href={`/post/${slug}`} passHref >
                    <a>
                        <Heading
                            color="dark.500"
                            noOfLines={2}
                            mt={-3}
                            fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
                        >
                            {title}
                        </Heading>
                    </a>
                </NextLink>
                <Text
                    color={{ base: "light.700", md: "light.500" }}
                    noOfLines={3}
                    fontSize={{ base: "xs", md: "md" }}
                >
                    {excerpt}
                </Text>
                <Flex
                    justifyContent="space-between"
                    fontSize={{ base: "xs", md: "sm" }}
                >
                    <Text color="light.100" >by {createdBy}</Text>
                    <Readmore url={`/post/${slug}`} text="read more" />
                </Flex>
            </Stack>


            <Box
                w={{ base: "100%", md: "50%" }}
            >
                <Box
                    position="relative"
                    w="full"
                    h={{ base: "200px", md: "350px", lg: "400px" }}
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
