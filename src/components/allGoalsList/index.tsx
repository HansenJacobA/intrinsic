import { useEffect, useState } from "react";
import { Day, Goal, MonthsByNumberAndOrderedDays } from "../../types";
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
  monthsByNumberAndOrderedDays,
  monthNameByMonthNumber,
} from "../../utilities/historicalData.ts";
import GoalStatusIcon from "../goalStatusIcon";
import GoalStatusText from "../goalStatusText";
import { getDataByYearMonthNum } from "../../utilities/getSelectedMonthData";
import { getCurrentYear } from "../../utilities/getCurrentYear";
import { getCurrentDayAndMonth } from "../../utilities/currentDay";

export default function AllGoalsList() {
  const [monthContainers, setMonthContainers] =
    useState<MonthsByNumberAndOrderedDays>(monthsByNumberAndOrderedDays);
  const [selectedYear, setSelectedYear] = useState<number>(2022);
  const [selectedMonth, setSelectedMonth] = useState<number>(12);

  useEffect(() => {
    const orderedSelectedMonthDaysData = getDataByYearMonthNum(
      selectedYear,
      selectedMonth
    );
    monthContainers[selectedMonth] = orderedSelectedMonthDaysData;
    setMonthContainers(monthContainers);

    const currentYear = getCurrentYear();
    setSelectedYear(parseInt(currentYear));
    const { currentMonth } = getCurrentDayAndMonth();
    setSelectedMonth(currentMonth);

    console.log({
      orderedSelectedMonthDaysData,
      monthContainers,
      currentYear,
      currentMonth,
    });
  }, [monthContainers, selectedMonth, selectedYear]);

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
