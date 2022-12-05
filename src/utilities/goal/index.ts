import { nanoid } from "nanoid";
import { Goal } from "../../types";
import { upsertDay } from "../currentDay";
import getValueByKey from "../getValueByKey";

export const upsertGoal = (goal: Goal): void => {
  const currentDay = getValueByKey(goal.dayId);

  if (goal.id) {
    goal.updatedAt = new Date().toLocaleString();
    currentDay.goals[goal.index] = goal;
  } else {
    const newGoal = {
      id: nanoid(),
      dayId: goal.dayId,
      goal: goal.goal,
      completed: false,
      index: goal.index,
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
    };
    currentDay.goals.push(newGoal);
  }
  upsertDay(currentDay);
};
