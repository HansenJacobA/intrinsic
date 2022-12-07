import { Flex, Heading } from "@chakra-ui/react";

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
      <Heading
        as="h2"
        size="lg"
        noOfLines={1}
        textAlign="center"
        fontWeight="hairline"
      >
        {greeting}
      </Heading>
    </Flex>
  );
}
