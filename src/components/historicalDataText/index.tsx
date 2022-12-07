import { Text } from "@chakra-ui/react";

export default function HistoricalDataText({
  description,
  quantity,
}: {
  description: string;
  quantity: number | string;
}) {
  return (
    <Text>
      {description}
      <Text fontWeight="bold" fontSize={20}>
        {quantity}
      </Text>
    </Text>
  );
}
