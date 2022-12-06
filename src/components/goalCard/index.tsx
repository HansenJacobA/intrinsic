import NextLink from "next/link";
import {
  Card,
  CardBody,
  Link,
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
    <NextLink href="/daily-goal">
      <Link
        _hover={{
          textDecoration: "none",
        }}
      >
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
                {percentComplete}%
              </StatHelpText>
              <StatLabel>Completed</StatLabel>
            </Stat>
          </CardBody>
        </Card>
      </Link>
    </NextLink>
  );
}
