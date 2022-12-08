import { Card, CardBody, Text, Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import getValueByKey from "../../utilities/getValueByKey";
import HistoricalDataText from "../historicalDataText";
import LinkComponent from "../linkComponent";
import { templateHistoricalData } from "../../utilities/historicalData.ts";

export default function ApplicationData() {
  const [currentHistoricalData, setHistoricalData] = useState(
    templateHistoricalData
  );

  useEffect(() => {
    const historicalData = getValueByKey("historicalData");
    setHistoricalData(historicalData);
  }, []);

  return (
    <Flex direction="column" gap={5} mb={10} w={300}>
      {LinkComponent({
        url: "/all-goals",
        component: (
          <Card>
            <CardBody textAlign="center">
              <Heading
                as="h3"
                size="lg"
                noOfLines={1}
                textAlign="center"
                pb={2}
              >
                Goals
              </Heading>

              <Flex gap={5} direction="column" mt={5}>
                <HistoricalDataText
                  description="Total:"
                  quantity={currentHistoricalData.goalData.numGoals}
                />

                <HistoricalDataText
                  description="Goals Completed:"
                  quantity={currentHistoricalData.goalData.numGoalsComplete}
                />

                <HistoricalDataText
                  description="Average # Goals Per Day:"
                  quantity={
                    currentHistoricalData.goalData.averageNumGoalsPerDay
                  }
                />
              </Flex>
            </CardBody>
          </Card>
        ),
      })}

      {LinkComponent({
        url: "/all-thoughts",
        component: (
          <Card>
            <CardBody textAlign="center">
              <Heading
                as="h3"
                size="lg"
                noOfLines={1}
                textAlign="center"
                pb={2}
              >
                Thoughts
              </Heading>

              <Flex gap={5} direction="column" mt={5}>
                <HistoricalDataText
                  description="Total:"
                  quantity={currentHistoricalData.thoughtData.numThoughts}
                />

                <HistoricalDataText
                  description="Average # Thoughts Per Day:"
                  quantity={
                    currentHistoricalData.thoughtData.averageNumThoughtPerDay
                  }
                />
              </Flex>
            </CardBody>
          </Card>
        ),
      })}

      {LinkComponent({
        url: "/home",
        component: (
          <Card pb={5}>
            <CardBody textAlign="center">
              <Heading
                as="h3"
                size="lg"
                noOfLines={1}
                textAlign="center"
                mb={5}
              >
                Moods
              </Heading>

              {Object.values(currentHistoricalData.moodData.moodCounts).map(
                ({ emoji, count }) => (
                  <Text key={emoji} fontWeight="bold">
                    {emoji} : {count}
                  </Text>
                )
              )}

              <Flex gap={5} direction="column" mt={5}>
                <HistoricalDataText
                  description="Total:"
                  quantity={currentHistoricalData.moodData.numMoods}
                />

                <HistoricalDataText
                  description="Average # Moods Per Day:"
                  quantity={
                    currentHistoricalData.moodData.averageNumMoodsPerDay
                  }
                />

                <HistoricalDataText
                  description="Favorite Mood:"
                  quantity={currentHistoricalData.moodData.topMood}
                />
              </Flex>
            </CardBody>
          </Card>
        ),
      })}
    </Flex>
  );
}
