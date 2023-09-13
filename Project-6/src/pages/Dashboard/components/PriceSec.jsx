import {
    Button,
    Flex,
    HStack,
    Icon,
    Image,
    Stack,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
} from "@chakra-ui/react";
import React from "react";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import CustomCard from "../../../assets/chakra/CustomCard";

function PriceSec() {
  const timespan = ["7:30 PM", "8:30 PM", "9:30 PM", "10:30 PM", "11:30 PM"];

  return (
    <>
      <CustomCard>
        <Flex justify="space-between" align="start">
          <Stack>
            <Stack>
              <HStack color="black.80">
                <Text fontSize="sm">Current Price</Text>
              </HStack>
            </Stack>

            <Stack>
              <HStack
                align={{
                  base: "flex-start",
                  sm: "center",
                }}
                flexDir={{
                  base: "column",
                  sm: "row",
                }}
              >
                <HStack>
                  <Text textStyle="h2">₹26,670.25</Text>
                  <HStack fontWeight="medium" color="green">
                    <Icon as={BsArrowUpRight} />
                    <Text marginLeft="-5px">22%</Text>
                  </HStack>
                </HStack>
              </HStack>
            </Stack>
          </Stack>

          <HStack>
            <Button leftIcon={<Icon as={AiFillPlusCircle} />}>Buy</Button>
            <Button leftIcon={<Icon as={AiOutlineMinusCircle} />}>Sell</Button>
          </HStack>
        </Flex>

        <Tabs variant="soft-rounded">
          <Flex justify="end" mt="4">
            <TabList bg="black.5" p="3px">
              {
                ["1H","1D","1W","1M"].map((ele) => (
                    <Tab
                        _selected={{bg:"white"}}
                        key={ele}
                        p="6px"
                        borderRadius="4"
                        fontSize="sm"
                    >{ele}</Tab>
                ))
              }
            </TabList>
            </Flex>
            <TabPanels>
              <TabPanel>
                <Image w="100%" src="/Graph.png" mt="0rem" />
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
              <TabPanel>
                <p>four!</p>
              </TabPanel>
            </TabPanels>
        </Tabs>

        <HStack justifyContent="space-between" mt="3">
          {timespan.map((time) => (
            <Text key={time} fontSize="sm" color="black.80">
              {time}
            </Text>
          ))}
        </HStack>
      </CustomCard>
    </>
  );
}

export default PriceSec;
