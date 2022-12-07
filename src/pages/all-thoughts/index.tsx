import { Flex } from "@chakra-ui/react";
import AllThoughtsList from "../../components/allThoughtsList";
import Template from "../../components/template";

export default function AllGoals() {
  return (
    <Flex justify="center" align="center" direction="column" gap={5}>
      <Template />
      <AllThoughtsList />
    </Flex>
  );
}
