import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import {
    AiOutlineArrowDown,
    AiOutlineArrowUp,
    AiOutlineInfoCircle,
} from "react-icons/ai";

function PortfoloioSec() {
  return (
    <div>
      <HStack
        justify="space-between"
        bg="white"
        borderRadius="xl"
        p="6"
        align={{
          base: "flex-start",
          xl: "center",
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
        spacing={{
            base:"5",
            xl:"0"
        }}
      >
        <HStack
          align={{
            base: "flex-start",
            xl: "center",
          }}
          flexDir={{
            base: "column",
            xl: "row",
          }}
          spacing={{
            base:"0",
            xl : "16",
          }}
        >
          <Stack>
            <HStack color="black.80">
              <Text fontSize="sm">Total Portfolio Value</Text>
              <Icon as={AiOutlineInfoCircle} />
            </HStack>
            <Text textStyle="h2">₹ 112,312.24</Text>
          </Stack>

          <Stack>
            <HStack color="black.80">
              <Text fontSize="sm">Wallet Balances</Text>
            </HStack>
            <HStack 
             align={{
                base: "flex-start",
                sm: "center",
              }}
              flexDir={{
                base: "column",
                sm: "row",
              }}>
              <HStack >
                <Text textStyle="h2">22.39401000</Text>
                <Tag>BTC</Tag>
              </HStack>
              <HStack marginLeft={{
                base : "0",
                xl : "12",
                sm : "4",
              }}  >
                <Text textStyle="h2">₹ 1,300.00</Text>
                <Tag>INR</Tag>
              </HStack>
            </HStack>
          </Stack>
        </HStack>

        <HStack>
          <Button leftIcon={<Icon as={AiOutlineArrowDown} />}>Deposit</Button>
          <Button leftIcon={<Icon as={AiOutlineArrowUp} />}>Withdraw</Button>
        </HStack>
      </HStack>
    </div>
  );
}

export default PortfoloioSec;
