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
import { useState, useEffect } from "react";
import { Day } from "../../types";
import { getCurrentDayData, upsertDay } from "../../utilities/currentDay";
import { upsertThought } from "../../utilities/thought";

export default function Thought() {
  const [currentDayData, setCurrentDayData] = useState<Day>({ thoughts: [] });
  const [currentThought, setCurrentThought] = useState("");
  const [newThoughtSubmitted, setNewThoughtSubmitted] = useState(false);

  useEffect(() => {
    const dayData = getCurrentDayData();
    setCurrentDayData(dayData);
  }, [newThoughtSubmitted]);

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
          const createdThought = upsertThought(currentThought);
          currentDayData.thoughts.push(createdThought);
          upsertDay(currentDayData);
          setCurrentThought("");
          setNewThoughtSubmitted(!newThoughtSubmitted);
        }}
        width="100%"
      >
        Save
      </Button>

      <Accordion allowMultiple width="100%" pb={10}>
        {currentDayData.thoughts.map(({ thought, createdAt }) => {
          return (
            <AccordionItem key={thought}>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="light"
                    fontSize="sm"
                  >
                    ☁️ {createdAt.split(",").pop()} ☁️
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
