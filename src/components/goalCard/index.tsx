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

export default function GoalCard() {
  const [currentDayData, setCurrentDayData] = useState<Day>({ goals: [] });
  const [percentComplete, setPercentComplete] = useState(0);

  useEffect(() => {
    const dayData = getCurrentDayData();
    setCurrentDayData(dayData);
    setPercentComplete(
      Math.round((getNumGoalsCompleted() / dayData.goals.length) * 1000) / 10
    );
  }, []);

  return (
    <Card w={300}>
      <CardBody textAlign="center">
        <Text mb={3} fontSize="lg">
          Goals
        </Text>

        <Stat>
          <StatNumber>
            {getNumGoalsCompleted()} / {currentDayData.goals.length}
          </StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            {percentComplete}%
          </StatHelpText>
          <StatLabel>Completed</StatLabel>
        </Stat>
      </CardBody>
    </Card>
  );
}
