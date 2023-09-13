import { HStack, Stack } from "@chakra-ui/react";
import React from "react";
import { AiTwotoneMessage } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import DashboardLayout from "../../assets/components/DashboardLayout";
import InfoCard from "../Dashboard/components/InfoCard";
import ContactCard from "./components/ContactCard";
import SupportCard from "./components/SupportCard";

function Support() {
  return (
    <>
      <DashboardLayout title="Support">
        <Stack spacing="5rem">
          <SupportCard
            icon={IoMdMail}
            title="Contact Us"
            text="Have a question or just want to know more? Feel free to reach out to us."
            leftCard={<ContactCard />}
          />

          <SupportCard 
            icon={AiTwotoneMessage}
            title="Live Chat"
            text="Don’t have time to wait for the answer? Chat with us now."
            leftCard={
              <HStack m="6" w="full">
                <InfoCard
                inverted={true}
                text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
                tagText="Loans"/>
              </HStack>
              
            }
          />
        </Stack>
      </DashboardLayout>
    </>
  );
}

export default Support;
