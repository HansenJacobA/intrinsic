import { useEffect, useState } from "react";
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
  Switch,
  Text,
} from "@chakra-ui/react";
import GoalStatusIcon from "../goalStatusIcon";
import GoalStatusText from "../goalStatusText";
import getValueByKey from "../../utilities/getValueByKey";
import { upsertGoal } from "../../utilities/goal";
import LinkComponent from "../linkComponent";

export default function AllGoalsList() {
  const [allGoals, setAllGoals] = useState([]);
  const [goalUpdated, setGoalUpdated] = useState(false);

  useEffect(() => {
    const allDayIds = getValueByKey("allDayIds");
    const getAllGoals = allDayIds.map((id: Day["id"]) => {
      const day = getValueByKey(id);
      return day.goals;
    });
    setAllGoals(getAllGoals.flat());
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
      {!allGoals.length ? (
        LinkComponent({
          url: "/daily-goal",
          component: (
            <Text as="h2" fontWeight="thin" fontSize={22} textAlign="center">
              Click me and go make a goal!
            </Text>
          ),
        })
      ) : (
        <Accordion allowMultiple width="100%" pb={10}>
          {allGoals.map(function listAllGoals(goal: Goal) {
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
                      <GoalStatusText completed={goal.completed} />
                    </Box>

                    <Flex>
                      <FormControl display="flex" alignItems="center" gap={2}>
                        <Switch
                          id="goal-completion"
                          defaultChecked={goal.completed}
                          mr={1}
                          onChange={function changeGoalCompletion() {
                            goal.completed = !goal.completed;
                            upsertGoal(goal);
                            setGoalUpdated(!goalUpdated);
                          }}
                        />
                        <GoalStatusIcon completed={goal.completed} />
                      </FormControl>
                    </Flex>
                  </Flex>
                </AccordionButton>

                <AccordionPanel pb={4}>{goal.goal}</AccordionPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      )}
    </Flex>
  );
}
