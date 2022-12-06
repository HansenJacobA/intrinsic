import Template from "../../components/template";
import { Flex } from "@chakra-ui/react";
import Goal from "../../components/goal";

export default function DailyGoal() {
  return (
    <Flex justify="center" align="center" direction="column" gap={5}>
      <Template />
      <Goal />
    </Flex>
  );
}
