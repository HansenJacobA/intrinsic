import Template from "../../components/template";
import Welcome from "../../components/welcome";
import { Flex } from "@chakra-ui/react";

export default function Mood() {
  return (
    <Flex justify="center" align="center" direction="column">
      <Template />
      <Welcome />
    </Flex>
  );
}
