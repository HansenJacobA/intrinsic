import { Flex, Text } from "@chakra-ui/react";

export default function Greeting() {
  const timeNow = new Date().toLocaleTimeString().split(" ");
  const greeting =
    timeNow.pop() === "AM"
      ? "Good morning,"
      : parseInt(timeNow.shift()) < 5
      ? "Good afternoon,"
      : "Good evening,";
  return (
    <Flex align="center" justify="center">
      <Text fontSize="lg" fontStyle="italic">
        {greeting}
      </Text>
    </Flex>
  );
}
