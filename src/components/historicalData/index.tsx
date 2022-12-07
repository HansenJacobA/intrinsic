import { Card, CardBody, Text, Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import getValueByKey from "../../utilities/getValueByKey";
import { templateGoalData } from "../../utilities/historicalData.ts";
import { templateThoughtData } from "../../utilities/historicalData.ts";
import { templateMoodData } from "../../utilities/historicalData.ts";
import HistoricalDataText from "../historicalDataText";
import LinkComponent from "../linkComponent";

export default function ApplicationData() {
  const [currentGoalData, setCurrentGoalData] = useState(templateGoalData);
  const [currentThoughtData, setCurrentThoughtData] =
    useState(templateThoughtData);
  const [currentMoodData, setCurrentMoodData] = useState(templateMoodData);

  useEffect(() => {
    const historicalData = getValueByKey("historicalData");
    setCurrentGoalData(historicalData.goalData);
    setCurrentThoughtData(historicalData.thoughtData);
    setCurrentMoodData(historicalData.moodData);
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
                  quantity={currentGoalData.numGoals}
                />

                <HistoricalDataText
                  description="Goals Completed:"
                  quantity={currentGoalData.numGoalsComplete}
                />

                <HistoricalDataText
                  description="Average # Goals Per Day:"
                  quantity={currentGoalData.averageNumGoalsPerDay}
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
                  quantity={currentThoughtData.numThoughts}
                />

                <HistoricalDataText
                  description="Average # Thoughts Per Day:"
                  quantity={currentThoughtData.averageNumThoughtPerDay}
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

              {Object.values(currentMoodData.moodCounts).map(
                ({ emoji, count }) => (
                  <Text key={emoji} fontWeight="bold">
                    {emoji} : {count}
                  </Text>
                )
              )}

              <Flex gap={5} direction="column" mt={5}>
                <HistoricalDataText
                  description="Total:"
                  quantity={currentMoodData.numMoods}
                />

                <HistoricalDataText
                  description="Average # Moods Per Day:"
                  quantity={currentMoodData.averageNumMoodsPerDay}
                />

                <HistoricalDataText
                  description="Favorite Mood:"
                  quantity={currentMoodData.topMood}
                />
              </Flex>
            </CardBody>
          </Card>
        ),
      })}
    </Flex>
  );
}
