import Template from "../../components/template";
import Mood from "../../components/mood";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex justify="center" align="center" direction="column">
      <Template />
      <Mood />
    </Flex>
  );
}
