import { HistoricalData } from "../../types";
import getValueByKey from "../getValueByKey";
import setValueByKey from "../setValueByKey";

export const addHistoricalDataDayCount = (): void => {
  const historicalData = getValueByKey("historicalData");
  historicalData.numDays += 1;
  setValueByKey("historicalData", historicalData);
};

export const addHistoricalDataGoalCount = (): void => {
  const historicalData = getValueByKey("historicalData");
  historicalData.goalData.numGoals += 1;
  setValueByKey("historicalData", historicalData);
};

export const addHistoricalDataGoalsCompleteCount = (
  numCompleted: number
): void => {
  const historicalData = getValueByKey("historicalData");
  historicalData.goalData.numGoalsComplete += numCompleted;
  setValueByKey("historicalData", historicalData);
};

export const calculateAverageNumGoalsPerDay = (): void => {
  const historicalData = getValueByKey("historicalData");
  historicalData.goalData.averageNumGoalsPerDay =
    Math.round(
      (historicalData.goalData.numGoals / historicalData.numDays) * 10
    ) / 10;
  setValueByKey("historicalData", historicalData);
};

export const addHistoricalDataThoughtData = (): void => {
  const historicalData = getValueByKey("historicalData");
  historicalData.thoughtData.numThoughts += 1;
  historicalData.thoughtData.averageNumThoughtPerDay =
    Math.round(
      (historicalData.thoughtData.numThoughts / historicalData.numDays) * 10
    ) / 10;
  setValueByKey("historicalData", historicalData);
};

export const addHistoricalDataMoodData = (description: string): void => {
  const historicalData = getValueByKey("historicalData");
  historicalData.moodData.numMoods += 1;
  historicalData.moodData.moodCounts[description].count += 1;
  historicalData.moodData.averageNumMoodsPerDay =
    Math.round(
      (historicalData.moodData.numMoods / historicalData.numDays) * 10
    ) / 10;
  const topMood: { emoji?: string; count?: number } = Object.values(
    historicalData.moodData.moodCounts
  ).reduce(
    (
      maxCountRecord: { emoji: string; count: number },
      nextRecord: { emoji: string; count: number }
    ) =>
      nextRecord.count >= maxCountRecord.count ? nextRecord : maxCountRecord,
    {
      emoji: "😁",
      count: 0,
    }
  );

  historicalData.moodData.topMood = topMood.emoji;
  setValueByKey("historicalData", historicalData);
};

export const templateHistoricalData: HistoricalData = {
  numDays: 0,
  moodData: {
    numMoods: 0,
    averageNumMoodsPerDay: 0,
    topMood: "😁",
    moodCounts: {
      happy: { emoji: "😁", count: 0 },
      peaceful: { emoji: "😌", count: 0 },
      studious: { emoji: "🤓", count: 0 },
      proud: { emoji: "🥹", count: 0 },
      excited: { emoji: "🥳", count: 0 },
      crazy: { emoji: "🤪", count: 0 },
      confused: { emoji: "😵‍💫", count: 0 },
      sad: { emoji: "😔", count: 0 },
      angry: { emoji: "🤬", count: 0 },
      embarrassed: { emoji: "😳", count: 0 },
      sleepy: { emoji: "😴", count: 0 },
      unwell: { emoji: "🤧", count: 0 },
      speechless: { emoji: "😶", count: 0 },
      pensive: { emoji: "🤔", count: 0 },
    },
  },
  thoughtData: {
    numThoughts: 0,
    averageNumThoughtsPerDay: 0,
  },
  goalData: {
    numGoals: 0,
    numGoalsComplete: 0,
    numDays: 0,
    averageNumGoalsPerDay: 0,
  },
};
