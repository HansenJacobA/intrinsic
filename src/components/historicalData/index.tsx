import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import getValueByKey from "../../utilities/getValueByKey";
import seedDown from "../../utilities/seedDown";

export default function ApplicationData() {
  const [numDays, setNumDays] = useState(0);
  const [goalData, setGoalData] = useState({
    numGoals: 0,
    numGoalsComplete: 0,
    averageNumGoalsPerDay: 0,
  });
  const [thoughtData, setThoughtData] = useState({
    numThoughts: 0,
    averageNumThoughtPerDay: 0,
  });
  const [moodData, setMoodData] = useState({
    numMoods: 0,
    averageNumMoodsPerDay: 0,
    topMood: "",
    moodCounts: {
      happy: { emoji: "😁", count: 0 },
      peaceful: { emoji: "😌", count: 0 },
      studious: { emoji: "🤓", count: 0 },
      proud: { emoji: "🥹", count: 0 },
      excited: { emoji: "🥳", count: 0 },
      crazy: { emoji: "🤪", count: 0 },
      confused: { emoji: "😵‍💫", count: 0 },
      sad: { emoji: "😔", count: 0 },
      angry: { emoji: "🤬", count: 0 },
      embarrassed: { emoji: "😳", count: 0 },
      sleepy: { emoji: "😴", count: 0 },
      unwell: { emoji: "🤧", count: 0 },
      speechless: { emoji: "😶", count: 0 },
      pensive: { emoji: "🤔", count: 0 },
    },
  });

  const [reset, setReset] = useState(false);

  useEffect(() => {
    const historicalData = getValueByKey("historicalData");
    setNumDays(historicalData.numDays);
    setGoalData(historicalData.goalData);
    setThoughtData(historicalData.thoughtData);
    setMoodData(historicalData.moodData);
  }, [reset]);

  return (
    <Flex direction="column" gap={5} mb={10}>
      <Card>
        <CardHeader textAlign="center">Goals</CardHeader>
        <CardBody textAlign="center">
          <Text>numGoals: {goalData.numGoals}</Text>
          <Text>numGoalsComplete: {goalData.numGoalsComplete}</Text>
          <Text>numDays: {numDays}</Text>
          <Text>averageNumGoalsPerDay: {goalData.averageNumGoalsPerDay}</Text>
        </CardBody>
      </Card>

      <Card>
        <CardHeader textAlign="center">Thoughts</CardHeader>
        <CardBody textAlign="center">
          <Text>numThoughts: {thoughtData.numThoughts}</Text>
          <Text>
            averageNumThoughtPerDay: {thoughtData.averageNumThoughtPerDay}
          </Text>
        </CardBody>
      </Card>

      <Card>
        <CardHeader textAlign="center">Moods</CardHeader>
        <CardBody textAlign="center">
          <Text>averageNumMoodsPerDay: {moodData.averageNumMoodsPerDay}</Text>
          <Text>topMood: {moodData.topMood}</Text>
        </CardBody>
      </Card>

      <Card>
        <CardHeader textAlign="center">Mood Counts</CardHeader>
        <CardBody textAlign="center">
          {Object.values(moodData.moodCounts).map(({ emoji, count }) => (
            <Text key={emoji}>
              emoji: {emoji} count: {count}
            </Text>
          ))}
          <Text>numMoods: {moodData.numMoods}</Text>
        </CardBody>
      </Card>

      <Button
        onClick={() => {
          setReset(!reset);
          seedDown();
        }}
      >
        Reset Application
      </Button>
    </Flex>
  );
}
