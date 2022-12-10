import { Card, CardBody, Heading, Flex } from "@chakra-ui/react";
import HistoricalDataText from "../historicalDataText";
import LinkComponent from "../linkComponent";

export default function HistoricalThoughtsCard({
  numThoughts,
  averageNumThoughtsPerDay,
}) {
  return LinkComponent({
    url: "/all-thoughts",
    component: (
      <Card>
        <CardBody textAlign="center">
          <Heading as="h3" size="lg" noOfLines={1} textAlign="center" pb={2}>
            Thoughts
          </Heading>

          <Flex gap={5} direction="column" mt={5}>
            <HistoricalDataText description="Total:" value={numThoughts} />

            <HistoricalDataText
              description="Average # Thoughts Per Day:"
              value={averageNumThoughtsPerDay}
            />
          </Flex>
        </CardBody>
      </Card>
    ),
  });
}
