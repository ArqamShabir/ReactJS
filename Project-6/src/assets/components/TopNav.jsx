import { Box, HStack, Heading, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { FaBars, FaUserTie } from "react-icons/fa"

function TopNav({title,onOpen}) {
  return (    
        <>
           <Box px="4" bg="white">
           <HStack maxW="70rem" h="16" justify="space-between" mx="auto">
                <Icon as={FaBars} onClick={onOpen}
                    display={{
                    base : "block",
                    lg : "none",
                 }}/>
                <Heading fontWeight="medium" fontSize="28px">{title}</Heading>
                <Menu>
                <MenuButton>
                 <Icon as={FaUserTie} fontSize="24px" />
                </MenuButton>
                     <MenuList>
                      <MenuItem>Log Out</MenuItem>
                      <MenuItem>Support</MenuItem>
                 </MenuList>
                </Menu>
            </HStack>
           </Box>
        </> 
 )
}

export default TopNav