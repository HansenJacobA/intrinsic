import { nanoid } from "nanoid";
import { Goal } from "../../types";
import { getCurrentDayData, upsertDay } from "../currentDay";
import getValueByKey from "../getValueByKey";
import {
  addHistoricalDataGoalsCompleteCount,
  addHistoricalDataGoalCount,
  calculateAverageNumGoalsPerDay,
} from "../historicalData.ts";

export const upsertGoal = (goal: Goal): void => {
  const currentDay = getValueByKey(goal.dayId);

  if (goal.id) {
    goal.updatedAt = new Date().toLocaleString();
    currentDay.goals[goal.index] = goal;
    addHistoricalDataGoalsCompleteCount(goal.completed ? 1 : -1);
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

    addHistoricalDataGoalCount();
    calculateAverageNumGoalsPerDay();
  }
  upsertDay(currentDay);
};

export const getNumGoalsCompleted = (): number => {
  const dayData = getCurrentDayData();
  return dayData.goals.reduce(
    (sum, { completed }) => sum + (completed ? 1 : 0),
    0
  );
};
