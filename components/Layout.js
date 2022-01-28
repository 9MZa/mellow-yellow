import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
    return (
        <Box>
            <Navbar />
            {children}
        </Box>
    );
};

export default Layout;
