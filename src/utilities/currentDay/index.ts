import { nanoid } from "nanoid";
import { CurrentDayAndMonth, Day } from "../../types";
import { getCurrentYear } from "../getCurrentYear";
import getValueByKey from "../getValueByKey";
import setValueByKey from "../setValueByKey";

export const getCurrentDayAndMonth = (): CurrentDayAndMonth => {
  return {
    currentDay: new Date().getDate(),
    currentMonth: new Date().getMonth() + 1,
  };
};

export const getCurrentDayData = (): Day => {
  const { currentDay, currentMonth } = getCurrentDayAndMonth();
  const yearData = getValueByKey(getCurrentYear());
  const dayID = yearData[currentMonth][currentDay];
  const currentDayData = getValueByKey(dayID);
  return currentDayData;
};

export const upsertDay = (newCurrentDayData: Day): void => {
  newCurrentDayData.updatedAt = new Date().toLocaleString();
  setValueByKey(newCurrentDayData.id, newCurrentDayData);
};

export const upsertYearData = (newCurrentDayDataID: string): void => {
  const currentYear = getCurrentYear();
  const { currentDay, currentMonth } = getCurrentDayAndMonth();
  const yearData = { ...getValueByKey(currentYear) };
  history[currentMonth][currentDay] = newCurrentDayDataID;
  setValueByKey(currentYear, yearData);
};

export const newCurrentDayData = {
  id: nanoid(),
  mood: {},
  thoughts: [],
  goals: [],
  year: parseInt(getCurrentYear()),
  createdAt: new Date().toLocaleString(),
  updatedAt: new Date().toLocaleString(),
};
