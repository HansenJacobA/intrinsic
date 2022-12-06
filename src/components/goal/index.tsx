import { CheckCircleIcon, SmallCloseIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Switch,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Day } from "../../types";
import { getCurrentDayData } from "../../utilities/currentDay";
import { upsertGoal } from "../../utilities/goal";

export default function Goal() {
  const [currentDayData, setCurrentDayData] = useState<Day>({ goals: [] });
  const [currentGoal, setCurrentGoal] = useState("");
  const [newGoalSubmitted, setNewGoalSubmitted] = useState(false);

  useEffect(() => {
    const dayData = getCurrentDayData();
    setCurrentDayData(dayData);
  }, [newGoalSubmitted]);

  return (
    <Flex justify="center" direction="column" gap={5}>
      <Text fontWeight="light">What would you like to accomplish today?</Text>
      <Textarea
        placeholder=". . ."
        onChange={function updateCurrentGoal(e) {
          setCurrentGoal(e.target.value);
        }}
        value={currentGoal}
      />
      <Button
        size="sm"
        onClick={function storeGoal() {
          if (currentGoal === "") return;
          upsertGoal({
            goal: currentGoal,
            index: currentDayData.goals.length,
            dayId: currentDayData.id,
          });
          setCurrentGoal("");
          setNewGoalSubmitted(!newGoalSubmitted);
        }}
      >
        Save
      </Button>

      <Accordion allowMultiple width="100%" pb={10}>
        {currentDayData.goals.map((goal) => {
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
                    {goal.completed ? "Great job! 🎉" : "You can do this! 💪"}
                  </Box>

                  <Flex>
                    <FormControl display="flex" alignItems="center" gap={2}>
                      <Switch
                        id="goal-completion"
                        defaultChecked={goal.completed}
                        onChange={function changeGoalCompletion() {
                          goal.completed = !goal.completed;
                          upsertGoal(goal);
                          setNewGoalSubmitted(!newGoalSubmitted);
                        }}
                      />
                      <FormLabel htmlFor="goal-completion" m={0}>
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

              <AccordionPanel pb={4}>{goal.goal}</AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Flex>
  );
}
