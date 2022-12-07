import { useState } from "react";
import { Day, Thought } from "../../types";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
} from "@chakra-ui/react";
import {
  getAllDaysOfMonthData,
  historyDataContainers,
} from "../../utilities/historicalData.ts";

export default function AllThoughtsList() {
  const [monthContainers, setMonthContainers] = useState(historyDataContainers);

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
                      onChange={function getSelectedMonthData() {
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
                            {day.thoughts.map((thought: Thought) => {
                              return (
                                <AccordionItem key={thought.id}>
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
                                        {thought.createdAt}
                                      </Box>
                                    </Flex>
                                  </AccordionButton>

                                  <AccordionPanel pb={4}>
                                    {thought.thought}
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
