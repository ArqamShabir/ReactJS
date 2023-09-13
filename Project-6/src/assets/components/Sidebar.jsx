import { Box, HStack, Heading, Icon, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { BiSupport } from 'react-icons/bi'
import { BsArrowDownUp } from 'react-icons/bs'
import { RxDashboard } from 'react-icons/rx'
import { Link } from 'react-router-dom'

function Sidebar() {

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
            <Stack bg="white" justifyContent="space-between" boxShadow={{base : "none", lg : "lg"}} w={{base : "full",lg:"16rem"}} minH="100vh">
               <Box>
                <Heading as="h1" textAlign="center" fontSize="20px" pt="3.5rem" color="#5F00D9">
                @DOSOMECODING
                </Heading>

                <Box mt="6" mx="3">
                {
                    navlinks.map((nav) => (
                    <Link to={nav.link} key={nav.text}>    
                    <HStack borderRadius="10px" py="3" px="4"
                    color="#797E82" _hover={{bg:"#f3f3f7",color:"#171717"}} cursor="pointer">
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
                    color="#797E82" _hover={{bg:"#f3f3f7",color:"#171717"}} cursor="pointer">
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