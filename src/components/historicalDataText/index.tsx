import { Flex, Text } from "@chakra-ui/react";

export default function HistoricalDataText({
  description,
  quantity,
}: {
  description: string;
  quantity: number | string;
}) {
  return (
    <Flex direction="column">
      <Text>{description}</Text>
      <Text fontWeight="bold" fontSize={20}>
        {quantity}
      </Text>
    </Flex>
  );
}
