import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import '../../App.css';
import Sidebar from "../../assets/components/Sidebar";
import TopNav from "../../assets/components/TopNav";
import SideDrawer from "./SideDrawer";
function DashboardLayout({title,children}) {

    const {isOpen,onOpen,onClose} = useDisclosure();

  return (
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
            <Container className="hide-scrollbar" overflowX="hidden" overflowY="auto" h="calc(100vh - 88px)" scroll maxW="70rem" mt="6">
                {children}
            </Container>
        </Box>
        </Flex>
  )
}

export default DashboardLayout