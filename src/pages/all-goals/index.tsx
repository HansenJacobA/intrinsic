import { Flex } from "@chakra-ui/react";
import Template from "../../components/template";
import AllGoalsList from "../../components/allGoalsList";

export default function AllGoals() {
  return (
    <Flex justify="center" align="center" direction="column" gap={5}>
      <Template />
      <AllGoalsList />
    </Flex>
  );
}
