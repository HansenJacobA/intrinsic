import { TriangleUpIcon } from "@chakra-ui/icons";
import { Card, CardBody, Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Day } from "../../types";
import { getCurrentDayData } from "../../utilities/currentDay";
import { getNumGoalsCompleted } from "../../utilities/goal";
import LinkComponent from "../linkComponent";

export default function GoalCard() {
  const [currentDayData, setCurrentDayData] = useState<Day>({ goals: [] });
  const [percentComplete, setPercentComplete] = useState(0);
  const [numGoalsComplete, setNumGoalsComplete] = useState(0);

  useEffect(() => {
    const dayData = getCurrentDayData();
    setCurrentDayData(dayData);

    const numCompletedGoals = getNumGoalsCompleted();
    setNumGoalsComplete(numCompletedGoals);

    setPercentComplete(
      Math.round((numCompletedGoals / dayData.goals.length) * 1000) / 10
    );
  }, []);

  return (
    <Flex>
      {LinkComponent({
        url: "/daily-goal",
        component: (
          <Card w={300}>
            <CardBody textAlign="center">
              <Text mb={2} fontSize="lg">
                Goals
              </Text>

              <Flex align="center" justify="center" direction="column">
                <Text fontSize="2xl" fontWeight="semibold" color="white">
                  {numGoalsComplete} / {currentDayData.goals.length}
                </Text>
                <Flex align="center" gap={1}>
                  <TriangleUpIcon color="green.500" />
                  <Text fontSize={14}>{percentComplete || 0}%</Text>
                </Flex>
                <Text fontSize={14} fontWeight="semibold" mt={2}>
                  Completed
                </Text>
              </Flex>
            </CardBody>
          </Card>
        ),
      })}
    </Flex>
  );
}
