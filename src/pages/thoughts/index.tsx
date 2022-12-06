import Template from "../../components/template";
import { Flex } from "@chakra-ui/react";
import Thought from "../../components/thought";

export default function Thoughts() {
  return (
    <Flex justify="center" align="center" direction="column" gap={5}>
      <Template />
      <Thought />
    </Flex>
  );
}
