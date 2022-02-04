import { Text, Heading, Box, SimpleGrid, Flex, Stack } from "@chakra-ui/react";
import HeroImg from "public/hero.svg";
import NextImage from "next/image";


const Hero = () => {
    return (
        <Box bgColor="gray.50" py={10} >
            <Box maxW="container.lg" mx="auto">
                <Flex
                    alignItems="center"
                >
                    <Box
                        w="50%"
                    >
                        <Stack spacing={10}>
                            <Heading size="2xl"> Adipisicing aliqua consequat deserunt. </Heading>
                            <Text fontSize="xl" color="light.200">
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

export default Hero;
