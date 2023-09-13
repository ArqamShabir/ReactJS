import { Box, HStack, Heading, Icon, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { BiSupport } from 'react-icons/bi'
import { BsArrowDownUp } from 'react-icons/bs'
import { RxDashboard } from 'react-icons/rx'
import { Link, useLocation } from 'react-router-dom'

function Sidebar() {

    const location = useLocation();
    const isActiveLink = (link) => {
        return location.pathname === link;
    }

    const navlinks = [
    {
        icon : RxDashboard,
        text : "Dashboard",
        link : "/",
    },
    {
        icon : BsArrowDownUp,
        text : "Transactions",
        link : "/transactions",
    }

    ]

  return (
        <>
            <Stack bg="white" justify="space-between" boxShadow={{base : "none", lg : "lg"}} w={{base : "full",lg:"16rem"}} h="100vh">
               <Box>
                <Heading as="h1" textAlign="center" fontSize="20px" pt="3.5rem" color="#5F00D9">
                @DOSOMECODING
                </Heading>

                <Box mt="6" mx="3">
                {
                    navlinks.map((nav) => (
                    <Link to={nav.link} key={nav.text}>    
                    <HStack 
                    color={isActiveLink(nav.link) ? "#171717" : "#797E82"}
                    bg={isActiveLink(nav.link) ? "#f3f3f7" : "transparent"} 
                    borderRadius="10px" py="3" px="4"
                    _hover={{bg:"#f3f3f7",color:"#171717"}} cursor="pointer">
                        <Icon as={nav.icon}/>
                        <Text fontSize="14px" fontWeight="medium">{nav.text}</Text>
                    </HStack>
                    </Link>
                ))
                }
                </Box>           
               </Box>
                
                <Link to="/support">
                <Box mt="6" mx="3" mb="6">
                <HStack borderRadius="10px" py="3" px="4"
                     color={isActiveLink("/support") ? "#171717" : "#797E82"}
                      bg={isActiveLink("/support") ? "#f3f3f7" : "transparent"} 
                      _hover={{bg:"#f3f3f7",color:"#171717"}} cursor="pointer">
                        <Icon as={BiSupport}/>
                        <Text fontSize="14px" fontWeight="medium">Support</Text>
                    </HStack>
                </Box>
                </Link>
            </Stack>
        </>
    )
}

export default Sidebar