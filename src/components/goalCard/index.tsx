import {
  Card,
  CardBody,
  Flex,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
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

              <Stat>
                <StatNumber>
                  {numGoalsComplete} / {currentDayData.goals.length}
                </StatNumber>
                <StatHelpText>
                  <StatArrow type="increase" />
                  {percentComplete || 0}%
                </StatHelpText>
                <StatLabel>Completed</StatLabel>
              </Stat>
            </CardBody>
          </Card>
        ),
      })}
    </Flex>
  );
}
