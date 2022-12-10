import { Card, CardBody, Heading, Flex } from "@chakra-ui/react";
import HistoricalDataText from "../historicalDataText";
import LinkComponent from "../linkComponent";

export default function HistoricalGoalsCard({
  numGoals,
  numGoalsComplete,
  averageNumGoalsPerDay,
}) {
  return LinkComponent({
    url: "/all-goals",
    component: (
      <Card>
        <CardBody textAlign="center">
          <Heading as="h3" size="lg" noOfLines={1} textAlign="center" pb={2}>
            Goals
          </Heading>

          <Flex gap={5} direction="column" mt={5}>
            <HistoricalDataText description="Total:" value={numGoals} />

            <HistoricalDataText
              description="Goals Completed:"
              value={numGoalsComplete}
            />

            <HistoricalDataText
              description="Average # Goals Per Day:"
              value={averageNumGoalsPerDay}
            />
          </Flex>
        </CardBody>
      </Card>
    ),
  });
}
