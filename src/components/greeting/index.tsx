import { Flex, Text } from "@chakra-ui/react";

export default function Greeting() {
  const timeNow = new Date().toLocaleTimeString().split(" ");
  const amPm = timeNow.pop();
  const hour = parseInt(timeNow.shift());
  const greeting =
    amPm === "AM"
      ? "Good morning,"
      : hour < 5 || hour === 12
      ? "Good afternoon,"
      : "Good evening,";
  return (
    <Flex align="center" justify="center">
      <Text fontSize="md" fontWeight="light">
        {greeting}
      </Text>
    </Flex>
  );
}
