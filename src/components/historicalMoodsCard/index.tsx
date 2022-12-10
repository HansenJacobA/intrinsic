import { Card, CardBody, Heading, Flex, Text } from "@chakra-ui/react";
import HistoricalDataText from "../historicalDataText";
import LinkComponent from "../linkComponent";

export default function HistoricalMoodsCard({
  moodCounts,
  numMoods,
  averageNumMoodsPerDay,
  topMood,
}) {
  return LinkComponent({
    url: "/home",
    component: (
      <Card pb={5}>
        <CardBody textAlign="center">
          <Heading as="h3" size="lg" noOfLines={1} textAlign="center" mb={5}>
            Moods
          </Heading>

          {Object.values(moodCounts).map(function listEmojiCounts({
            emoji,
            count,
          }: {
            emoji: string;
            count: number;
          }) {
            return (
              <Text key={emoji} fontWeight="bold">
                {emoji} : {count}
              </Text>
            );
          })}

          <Flex gap={5} direction="column" mt={5}>
            <HistoricalDataText description="Total:" value={numMoods} />

            <HistoricalDataText
              description="Average # Moods Per Day:"
              value={averageNumMoodsPerDay}
            />

            <HistoricalDataText description="Favorite Mood:" value={topMood} />
          </Flex>
        </CardBody>
      </Card>
    ),
  });
}
