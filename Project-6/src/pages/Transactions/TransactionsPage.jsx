import { Button, Card, Flex, HStack, Icon, Input, InputGroup, InputLeftElement, Tab, TabList, TabPanel, TabPanels, Tabs, Tag } from "@chakra-ui/react";
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { BsSearch } from 'react-icons/bs';
import DashboardLayout from "../../assets/components/DashboardLayout";
import TransactionsTable from "./components/TransactionsTable";

function TransactionPage() {

  const tabs = [
    {
      name : "All",
      content : "349"
    },
    {
      name : "Deposit",
      content : "114"
    },
    {
      name : "Withdraw",
      content : "213"
    },
    {
      name : "Trade",
      content : "22"
    },
  ]

  return (
    <>
      <DashboardLayout title="Transactions">
        <Flex justify="end" mt="6" mb="3">
          <Button leftIcon={<Icon as={AiOutlineDownload} />}>Export CSV</Button>
        </Flex>
        <Card borderRadius="8">
          <Tabs>
            <TabList p="4" display="flex" justifyContent="space-between" w="full">
                <HStack>
                {
                  tabs.map((tab) => (
                    <Tab display="flex" gap="2">
                      {tab.name}{" "}
                    <Tag colorScheme="gray" borderRadius="full">{tab.content}</Tag>  
                    </Tab>
                  ))
              }
                </HStack>

            <InputGroup maxW="200px" pr="6">
              <InputLeftElement pointerEvents="none">
                <Icon as={BsSearch} />
              </InputLeftElement>
              <Input type="search" placeholder="Search..." />
            </InputGroup>

            </TabList>

            <TabPanels>
              <TabPanel>
                <TransactionsTable/>
              </TabPanel>
              <TabPanel>
              <TransactionsTable/>
              </TabPanel>
              <TabPanel>
              <TransactionsTable/>
              </TabPanel>
              <TabPanel>
              <TransactionsTable/>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>
      </DashboardLayout>
    </>
  );
}

export default TransactionPage;
