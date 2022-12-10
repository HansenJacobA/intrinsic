import { Flex, Text } from "@chakra-ui/react";
import { HistoricalDataCardText } from "../../types";

export default function HistoricalDataText({
  description,
  value,
}: HistoricalDataCardText) {
  return (
    <Flex direction="column">
      <Text>{description}</Text>
      <Text fontWeight="bold" fontSize={20}>
        {value}
      </Text>
    </Flex>
  );
}
