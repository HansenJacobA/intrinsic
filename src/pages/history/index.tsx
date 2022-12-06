import Template from "../../components/template";
import Greeting from "../../components/greeting";
import HistoricalData from "../../components/historicalData";
import { Flex } from "@chakra-ui/react";

export default function History() {
  return (
    <Flex justify="center" align="center" direction="column" gap={5}>
      <Template />
      <Greeting />
      <HistoricalData />
    </Flex>
  );
}
