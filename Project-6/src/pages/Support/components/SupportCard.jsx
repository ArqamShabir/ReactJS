import { Box, Flex, Icon, Stack, Text } from '@chakra-ui/react'
import React from 'react'


function SupportCard({leftCard,icon,text,title}) {
  return (
    <Flex gap="6" flexDir={{
        base : "column",
        xl : "row"
    }}>
        <Stack maxW="24rem">
            <Icon as={icon} boxSize={6} color="p.purple"/>
            <Text textStyle="h1" as="h1"fontWeight="medium">{title}</Text>
            <Text fontSize="sm" color="black.60">
            {text}
            </Text>
        </Stack>
        <Box w="full" maxW="550px">
        {leftCard}
        </Box>
    </Flex>
  )
}

export default SupportCard