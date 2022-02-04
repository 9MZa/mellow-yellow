import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = ({ children }) => {
    return (
        <Box>
            <Navbar />
            {children}
            <Footer />
        </Box>
    );
};

export default Layout;
