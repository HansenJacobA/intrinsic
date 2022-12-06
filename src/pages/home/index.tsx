import Template from "../../components/template";
import Mood from "../../components/mood";
import GoalCard from "../../components/goalCard";
import { Button, Flex } from "@chakra-ui/react";
import Greeting from "../../components/greeting";
import seedDown from "../../utilities/seedDown";

export default function Home() {
  return (
    <Flex justify="center" align="center" direction="column" gap={5} mb={10}>
      <Template />
      {/* <Greeting />
      <Mood />
      <GoalCard /> */}
      <Button onClick={() => seedDown()}>delete</Button>
    </Flex>
  );
}
