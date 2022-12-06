import { useState, useEffect } from "react";
import { Button, Card, CardBody, Flex, Text } from "@chakra-ui/react";
import Greeting from "../greeting";
import { moodOptions, upsertMood } from "../../utilities/mood";
import { getCurrentDayData, upsertDay } from "../../utilities/currentDay";
import { Day } from "../../types";

export default function Mood() {
  const [currentDayData, setCurrentDayData] = useState<Day>({});
  const [mood, setMood] = useState<string>(currentDayData.mood?.emoji);
  const [moodSelected, setMoodSelected] = useState(false);

  useEffect(() => {
    const dayData = getCurrentDayData();
    setCurrentDayData(dayData);
    if (dayData.mood.emoji) {
      setMood(dayData.mood.emoji);
      setMoodSelected(true);
    }
  }, [mood]);

  return (
    <Card>
      <CardBody>
        <Greeting />
        {moodSelected ? (
          <Flex direction="column" gap={2}>
            <Text fontSize="xl" m={7}>
              You are feeling {mood} today
            </Text>
            <Button
              size="xs"
              fontWeight="thin"
              onClick={function changeMood() {
                setMoodSelected(false);
              }}
              variant="link"
            >
              Change mood?
            </Button>
          </Flex>
        ) : (
          <Flex
            textAlign="center"
            alignContent="center"
            justifyContent="center"
            direction="column"
          >
            <Text m={7} fontSize="xl">
              How are you feeling today?
            </Text>
            <Flex align="center" justify="center" direction="column">
              {moodOptions.map(({ emoji, description }) => {
                return (
                  <Button
                    key={description}
                    alignItems="center"
                    justifyContent="space-between"
                    w="60%"
                    variant="link"
                    onClick={function selectMood() {
                      setMood(emoji);
                      setMoodSelected(true);
                      if (emoji === mood) return;

                      const newMood = upsertMood(
                        currentDayData,
                        emoji,
                        description
                      );
                      const newCurrentDayData = {
                        ...currentDayData,
                        mood: newMood,
                      };

                      upsertDay(newCurrentDayData);
                    }}
                  >
                    <Text fontSize="xs">{description}</Text>
                    <Text fontSize="2xl">{emoji}</Text>
                  </Button>
                );
              })}
            </Flex>
          </Flex>
        )}
      </CardBody>
    </Card>
  );
}
