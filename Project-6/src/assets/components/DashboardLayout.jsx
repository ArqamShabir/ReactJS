import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import Sidebar from "../../assets/components/Sidebar";
import TopNav from "../../assets/components/TopNav";
import SideDrawer from "./SideDrawer";

function DashboardLayout({title,children}) {

    const {isOpen,onOpen,onClose} = useDisclosure();

  return (
    <>
        <Flex>
            <Box  
                 display={{
                base : "none",
                lg : "flex",
            }}>
                <Sidebar/>
            </Box>
        <SideDrawer isOpen={isOpen} onClose={onClose} />
        <Box flexGrow="1">
            <TopNav title={title} onOpen={onOpen} />
            <Container maxW="70rem" mt="4" overflowX="hidden" overflowY="auto" h="calc(100vh -88px)">
                {children}
            </Container>
        </Box>
        </Flex>
    </>
  )
}

export default DashboardLayout