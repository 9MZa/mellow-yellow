import {
    Text,
    Heading,
    Box,
    Flex,
    Stack
} from "@chakra-ui/react";
import HeroImg from "public/hero.svg";
import NextImage from "next/image";

const HeroIndexPage = () => {
    return (
        <Box
            bgColor="gray.100"
            px={{ base: 5, md: 10, lg: 0 }}
            pb={{ base: 10, md: 0 }}
            textAlign={{ base: "center", md: "left" }}
        >
            <Box maxW="container.lg" mx="auto">
                <Flex
                    alignItems="center"
                    flexDirection={{ base: "column-reverse", md: "row" }}
                >
                    <Box
                        w={{ base: "100%", md: "50%" }}
                        mt={{ base: -5, md: 0 }}
                    >
                        <Stack spacing={{ base: 5, md: 5, lg: 7 }}>
                            <Heading
                                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                                color="dark.500"
                            >
                                Adipisicing aliqua consequat deserunt.
                            </Heading>
                            <Text fontSize="xl" color="light.500">
                                Veniam sint duis sit qui. nulla proident Anim tempor aliqua veniam non ea velit nisi et. Consectetur  magna ea mollit magna.
                            </Text>
                        </Stack>
                    </Box>
                    <Flex
                        justifyContent="end"
                        w={{ base: "100%", md: "50%" }}
                        mt={{ base: -14, md: 0 }}
                        zIndex={0}
                    >
                        <Box
                            position="relative"
                            h="450px"
                            w="450px"
                        >
                            <NextImage src={HeroImg} layout="fill" />
                        </Box>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
};

export default HeroIndexPage;

export const HeroPost = ({ title, subtitle, total }) => {
    return (
        <>
            <Stack py={20} bgColor="gray.100" textAlign="center" >
                <Heading size="2xl" color="dark.500">{title}</Heading>
                <Text color="light.500">{total}{subtitle} </Text>
            </Stack>

        </>
    );
};

export const HeroCategory = ({ name, total }) => {

    return (
        <>
            <Stack py={20} bgColor="gray.100" textAlign="center" >
                <Heading size="2xl" color="dark.500"> {total} Posts on {name}</Heading>
            </Stack>
        </>
    );
};
