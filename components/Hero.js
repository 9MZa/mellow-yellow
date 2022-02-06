import { Text, Heading, Box, SimpleGrid, Flex, Stack, toast } from "@chakra-ui/react";
import HeroImg from "public/hero.svg";
import NextImage from "next/image";


const HeroIndexPage = () => {
    return (
        <Box bgColor="gray.100" py={10} >
            <Box maxW="container.lg" mx="auto">
                <Flex
                    alignItems="center"
                >
                    <Box
                        w="50%"
                    >
                        <Stack spacing={10}>
                            <Heading
                                size="2xl"
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
                        w="50%"

                        justifyContent="end"
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
