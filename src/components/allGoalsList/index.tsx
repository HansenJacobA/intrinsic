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
  Switch,
} from "@chakra-ui/react";
import { CheckCircleIcon, SmallCloseIcon } from "@chakra-ui/icons";
import {
  historyDataContainers,
  monthNameByMonthNumber,
} from "../../utilities/historicalData.ts";
import { upsertGoal } from "../../utilities/goal";
import { getAllHistoricalData } from "../../utilities/getAllHistoricalData";

export default function AllGoalsList() {
  const [monthContainers, setMonthContainers] = useState(historyDataContainers);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const allHistoricalData = getAllHistoricalData();
    setMonthContainers(allHistoricalData);
  }, [refresh]);

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
                                      <AccordionIcon />
                                      {goal.completed
                                        ? "Great job! 🎉"
                                        : "You can do this! 💪"}
                                    </Box>

                                    <Flex>
                                      <FormControl
                                        display="flex"
                                        alignItems="center"
                                        gap={2}
                                      >
                                        <Switch
                                          id="goal-completion"
                                          defaultChecked={goal.completed}
                                          onChange={function changeGoalCompletion() {
                                            goal.completed = !goal.completed;
                                            upsertGoal(goal);
                                            setRefresh(!refresh);
                                          }}
                                        />
                                        <FormLabel
                                          htmlFor="goal-completion"
                                          m={0}
                                        >
                                          {goal.completed ? (
                                            <CheckCircleIcon color="green.500" />
                                          ) : (
                                            <SmallCloseIcon color="red.500" />
                                          )}
                                        </FormLabel>
                                      </FormControl>
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
