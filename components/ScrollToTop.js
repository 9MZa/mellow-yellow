import React, { useEffect, useState } from "react";
import {
    Box,
} from "@chakra-ui/react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 700) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <Box
            position="fixed"
            zIndex={20}
            right={{ base: 5, md: 10, lg: 20 }}
            bottom={{ base: 5, md: 10, lg: 20 }}
        >
            {isVisible && (
                <Box
                    as="button"
                    bgColor="primary.500"
                    p={3}
                    fontSize="xl"
                    transition="all .3s ease-out"
                    _hover={{
                        bgColor: "primary.200"
                    }}
                    onClick={scrollToTop}
                >
                    <ion-icon name="chevron-up-outline"></ion-icon>
                </Box>
            )}
        </Box>
    );
}
