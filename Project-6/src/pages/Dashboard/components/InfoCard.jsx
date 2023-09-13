import { Tag, Text } from "@chakra-ui/react";
import React from "react";
import CustomCard from "../../../assets/chakra/CustomCard";

function InfoCard({ text, tagText, inverted }) {
  return (
    <div>
      <CustomCard bg={inverted ? "p.purple" : "white"}>
        <Tag
          borderRadius="full"
          color={inverted ? "p.purple" : "white"}
          bg={inverted ? "white" : "p.purple"}
        >
          {tagText}
        </Tag>
        <Text fontStyle="h5" fontWeight="medium" mt="4" color={inverted ? "white" : "black.90"}>
          {text}
        </Text>
      </CustomCard>
    </div>
  );
}

export default InfoCard;
