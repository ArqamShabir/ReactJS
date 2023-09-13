import { Button, Flex, Grid, Icon, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { BsCurrencyRupee } from "react-icons/bs";
import { FaBtc } from "react-icons/fa";
import CustomCard from '../../../assets/chakra/CustomCard';


function Transactions() {

    const transactions = [
        {
          id: "1",
          icon: BsCurrencyRupee,
          text: "INR Deposit",
          amount: "+ ₹81,123.10",
          timestamp: "2022-06-09 7:06 PM",
        },
        {
          id: "2",
          icon: FaBtc,
          text: "BTC  Sell",
          amount: "- 12.48513391 BTC",
          timestamp: "2022-06-09 7:06 PM",
        },
        {
          id: "3",
          icon: BsCurrencyRupee,
          text: "INR Deposit",
          amount: "+ ₹81,123.10",
          timestamp: "2022-06-09 7:06 PM",
        },
      ];

  return (

        <CustomCard h="full">
            <Text color="black.80" fontSize="sm" mb="6">Recent Transactions</Text>
            <Stack spacing="6">
                {
                    transactions.map((transaction) => (
                        <Flex key={transaction.id} gap="4">
                            <Grid
                                placeItems="center"
                                bg = "black.5"
                                boxSize="50"
                                borderRadius="full"
                            >
                                <Icon as={transaction.icon}/>
                            </Grid>

                            <Flex justify="space-between" w="full" spacing="4">
                                <Stack spacing="0">
                                    <Text textStyle="h6">{transaction.text}</Text>
                                    <Text fontSize="sm" color="black.40">{transaction.timestamp}</Text>
                                </Stack>
                                <Text textStyle="h6">{transaction.amount}</Text>
                            </Flex>
                        </Flex>
                    ))
                }
            </Stack>
            <Button colorScheme='gray' mt="8" w="full">View All</Button>
        </CustomCard>

  )
}

export default Transactions