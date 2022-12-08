import { useEffect, useState } from "react";
import { Day, Goal } from "../../types";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import {
  historyDataContainers,
  monthNameByMonthNumber,
} from "../../utilities/historicalData.ts";

import { getAllHistoricalData } from "../../utilities/getAllHistoricalData";
import GoalStatusIcon from "../goalStatusIcon";
import GoalStatusText from "../goalStatusText";

export default function AllGoalsList() {
  const [monthContainers, setMonthContainers] = useState(historyDataContainers);

  useEffect(() => {
    const allHistoricalData = getAllHistoricalData();
    setMonthContainers(allHistoricalData);
  }, []);

  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      gap={5}
      w={300}
      mt={4}
    >
      <Accordion allowMultiple width="100%" pb={10}>
        {Object.values(monthContainers).map(
          (daysInOrder: Day[], index: number) => {
            return (
              <AccordionItem key={index}>
                <AccordionButton>
                  <Flex width="100%" justify="space-between">
                    <Box
                      display="flex"
                      textAlign="left"
                      fontWeight="light"
                      fontSize="sm"
                      gap={2}
                    >
                      {monthNameByMonthNumber[index + 1]}
                    </Box>
                    <AccordionIcon />
                  </Flex>
                </AccordionButton>

                <AccordionPanel pb={4}>
                  {daysInOrder.map((day: Day) => {
                    return (
                      <AccordionItem key={day.id}>
                        <AccordionButton>
                          <Flex width="100%" justify="space-between">
                            <Box
                              display="flex"
                              textAlign="left"
                              fontWeight="light"
                              fontSize="sm"
                              gap={2}
                            >
                              {day.createdAt.split(",")[0]}
                            </Box>
                            <AccordionIcon />
                          </Flex>
                        </AccordionButton>

                        <AccordionPanel pb={4}>
                          {day.goals.map((goal: Goal) => {
                            return (
                              <AccordionItem key={goal.id}>
                                <AccordionButton>
                                  <Flex width="100%" justify="space-between">
                                    <Box
                                      display="flex"
                                      textAlign="left"
                                      fontWeight="light"
                                      fontSize="sm"
                                      gap={2}
                                    >
                                      <GoalStatusText
                                        completed={goal.completed}
                                      />
                                    </Box>

                                    <Flex gap={2}>
                                      <FormControl
                                        display="flex"
                                        alignItems="center"
                                        gap={2}
                                      >
                                        <FormLabel
                                          htmlFor="goal-completion"
                                          m={0}
                                        >
                                          <GoalStatusIcon
                                            completed={goal.completed}
                                          />
                                        </FormLabel>
                                      </FormControl>
                                      <AccordionIcon />
                                    </Flex>
                                  </Flex>
                                </AccordionButton>

                                <AccordionPanel pb={4}>
                                  {goal.goal}
                                </AccordionPanel>
                              </AccordionItem>
                            );
                          })}
                        </AccordionPanel>
                      </AccordionItem>
                    );
                  })}
                </AccordionPanel>
              </AccordionItem>
            );
          }
        )}
      </Accordion>
    </Flex>
  );
}
