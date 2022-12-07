import { Card, CardBody, CardHeader, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import getValueByKey from "../../utilities/getValueByKey";
import { templateGoalData } from "../../utilities/historicalData.ts";
import { templateThoughtData } from "../../utilities/historicalData.ts";
import { templateMoodData } from "../../utilities/historicalData.ts";

export default function ApplicationData() {
  const [numDays, setNumDays] = useState(0);
  const [currentGoalData, setCurrentGoalData] = useState(templateGoalData);
  const [currentThoughtData, setCurrentThoughtData] =
    useState(templateThoughtData);
  const [currentMoodData, setCurrentMoodData] = useState(templateMoodData);

  useEffect(() => {
    const historicalData = getValueByKey("historicalData");
    setNumDays(historicalData.numDays);
    setCurrentGoalData(historicalData.goalData);
    setCurrentThoughtData(historicalData.thoughtData);
    setCurrentMoodData(historicalData.moodData);
  }, []);

  return (
    <Flex direction="column" gap={5} mb={10}>
      <Card>
        <CardHeader textAlign="center">Goals</CardHeader>
        <CardBody textAlign="center">
          <Text>numGoals: {currentGoalData.numGoals}</Text>
          <Text>numGoalsComplete: {currentGoalData.numGoalsComplete}</Text>
          <Text>numDays: {numDays}</Text>
          <Text>
            averageNumGoalsPerDay: {currentGoalData.averageNumGoalsPerDay}
          </Text>
        </CardBody>
      </Card>

      <Card>
        <CardHeader textAlign="center">Thoughts</CardHeader>
        <CardBody textAlign="center">
          <Text>numThoughts: {currentThoughtData.numThoughts}</Text>
          <Text>
            averageNumThoughtPerDay:{" "}
            {currentThoughtData.averageNumThoughtPerDay}
          </Text>
        </CardBody>
      </Card>

      <Card>
        <CardHeader textAlign="center">Moods</CardHeader>
        <CardBody textAlign="center">
          <Text>
            averageNumMoodsPerDay: {currentMoodData.averageNumMoodsPerDay}
          </Text>
          <Text>topMood: {currentMoodData.topMood}</Text>
        </CardBody>
      </Card>

      <Card>
        <CardHeader textAlign="center">Mood Counts</CardHeader>
        <CardBody textAlign="center">
          {Object.values(currentMoodData.moodCounts).map(({ emoji, count }) => (
            <Text key={emoji}>
              emoji: {emoji} count: {count}
            </Text>
          ))}
          <Text>numMoods: {currentMoodData.numMoods}</Text>
        </CardBody>
      </Card>
    </Flex>
  );
}
