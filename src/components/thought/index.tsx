import {
  Flex,
  Textarea,
  Text,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import { getCurrentDayData, upsertDay } from "../../utilities/currentDay";

export default function Thought() {
  const [currentDayData, setCurrentDayData] = useState<Day>();
  const [currentThought, setCurrentThought] = useState("");

  useEffect(() => {
    const dayData = getCurrentDayData();
    setCurrentDayData(dayData);
  }, []);

  return (
    <Flex w={350} align="center" direction="column" gap={5}>
      <Text fontSize="lg">🍃🍃🌳🌤</Text>
      <Textarea
        placeholder=". . ."
        height={275}
        onChange={function updateThought(e) {
          setCurrentThought(e.target.value);
        }}
        value={currentThought}
      />
      <Button
        onClick={function storeThought() {
          const thought = {
            id: nanoid(),
            thought: currentThought,
            createdAt: new Date().toLocaleString(),
            updatedAt: new Date().toLocaleString(),
          };
          const newCurrentDayData = { ...currentDayData };
          newCurrentDayData.thoughts = currentDayData?.thoughts?.length
            ? [thought, ...currentDayData.thoughts]
            : [thought];
          upsertDay(newCurrentDayData);
          //   setCurrentDayData(newCurrentDayData);
          setCurrentThought("");
        }}
      >
        Save
      </Button>

      <Accordion allowMultiple width="100%">
        {currentDayData?.thoughts?.map(({ thought }) => {
          return (
            <AccordionItem key={thought}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    ☁️
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{thought}</AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Flex>
  );
}
