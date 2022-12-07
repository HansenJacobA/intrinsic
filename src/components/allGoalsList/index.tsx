import { useState } from "react";
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
import { historyDataContainers } from "../../utilities/historicalData.ts";
import { upsertGoal } from "../../utilities/goal";
import { getAllDaysOfMonthData } from "../../utilities/getDaysOfMonthData";

export default function AllGoalsList() {
  const [monthContainers, setMonthContainers] = useState(historyDataContainers);
  const [refresh, setRefresh] = useState(false);

  return (
    <Flex justify="center" align="center" direction="column" gap={5} w={300}>
      All Goals Here
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
                      onClick={function getSelectedMonthData() {
                        const monthsData = getAllDaysOfMonthData(index + 1);
                        monthContainers[index + 1] = monthsData;
                        setMonthContainers(monthContainers);
                      }}
                    >
                      <AccordionIcon />
                      Month: {index + 1}
                    </Box>
                  </Flex>
                </AccordionButton>

                <AccordionPanel pb={4}>
                  {daysInOrder.map((day: Day, index: number) => {
                    return (
                      <Accordion
                        allowMultiple
                        width="100%"
                        pb={10}
                        key={day.id}
                      >
                        <AccordionItem>
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
                                Day: {index + 1}
                              </Box>
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
                      </Accordion>
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
