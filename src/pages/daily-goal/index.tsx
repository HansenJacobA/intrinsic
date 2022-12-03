import Template from "../../components/template";
import Welcome from "../../components/greeting";
import { Flex } from "@chakra-ui/react";

export default function DailyGoal() {
  return (
    <Flex justify="center" align="center" direction="column">
      <Template />
      <Welcome />
    </Flex>
  );
}
