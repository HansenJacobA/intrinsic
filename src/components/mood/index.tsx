import { useState } from "react";
import { Button, Card, CardBody, Flex, Text } from "@chakra-ui/react";
import Greeting from "../greeting";
import { moodOptions, createMood } from "../../utilities/mood";
import { upsertDay } from "../../utilities/currentDay";

export default function Mood() {
  const [mood, setMood] = useState("");
  const [moodSelected, setMoodSelected] = useState(false);
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
              fontWeight="light"
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
                      upsertDay({ mood: createMood(emoji, description) });
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
