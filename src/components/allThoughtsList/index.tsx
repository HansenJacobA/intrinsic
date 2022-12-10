import { useEffect, useState } from "react";
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
  monthsByNumberAndOrderedDays,
  monthNameByMonthNumber,
} from "../../utilities/historicalData.ts";
// import { getAllHistoricalData } from "../../utilities/getAllHistoricalData";

export default function AllThoughtsList() {
  const [monthContainers, setMonthContainers] = useState(
    monthsByNumberAndOrderedDays
  );

  useEffect(() => {
    // const allHistoricalData = getAllHistoricalData();
    // setMonthContainers(allHistoricalData);
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
                    <Box display="flex" fontWeight="light" fontSize="sm">
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
                              fontWeight="light"
                              fontSize="sm"
                            >
                              {day.createdAt.split(",")[0]}
                            </Box>
                            <AccordionIcon />
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
                                      fontWeight="light"
                                      fontSize="sm"
                                    >
                                      {thought.createdAt.split(",")[1]}
                                    </Box>
                                    <AccordionIcon />
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
