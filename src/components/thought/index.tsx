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
  Card,
  CardBody,
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
    <Flex w={300} align="center" direction="column" gap={5} mb={10}>
      <Text fontSize="xl" textAlign="center">
        🍃🌳🌤
      </Text>
      <Card w={300}>
        <CardBody>
          <Textarea
            placeholder=". . ."
            height={250}
            onChange={function updateThought(e) {
              setCurrentThought(e.target.value);
            }}
            value={currentThought}
          />
        </CardBody>
      </Card>

      <Button
        onClick={function storeThought() {
          const createdThought = upsertThought(currentThought);
          currentDayData.thoughts.push(createdThought);
          upsertDay(currentDayData);
          setCurrentThought("");
          setNewThoughtSubmitted(!newThoughtSubmitted);
        }}
        width="100%"
        size="sm"
      >
        Save
      </Button>

      <Accordion allowMultiple width="100%" pb={10}>
        {currentDayData.thoughts.map(({ thought, createdAt }) => {
          return (
            <AccordionItem key={createdAt}>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="center"
                    fontWeight="light"
                    fontSize="sm"
                  >
                    🍃 {createdAt.split(",").pop()} 💨
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
