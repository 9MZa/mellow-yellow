import React, { useEffect, useState } from "react";
import {
    Box,
} from "@chakra-ui/react";
import { IoChevronUpOutline } from "@react-icons/all-files/io5/IoChevronUpOutline";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Top: 0 takes us all the way back to the top of the page
    // Behavior: smooth keeps it smooth!
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        // Button is displayed after scrolling for 500 pixels
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
                    <IoChevronUpOutline />
                </Box>
            )}
        </Box>
    );
}
