import { nanoid } from "nanoid";
import { Day } from "../../types";
import getValueByKey from "../getValueByKey";
import setValueByKey from "../setValueByKey";

export const getCurrentDayAndMonth = (): {
  currentDay: number;
  currentMonth: number;
} => {
  return {
    currentDay: new Date().getDate(),
    currentMonth: new Date().getMonth() + 1,
  };
};

export const getCurrentDayData = (): Day => {
  const { currentDay, currentMonth } = getCurrentDayAndMonth();
  const history = getValueByKey("history");
  const dayID = history[currentMonth][currentDay];
  const currentDayData = getValueByKey(dayID);
  return currentDayData;
};

export const upsertDay = (newCurrentDayData: Day): void => {
  newCurrentDayData.updatedAt = new Date().toLocaleString();
  setValueByKey(newCurrentDayData.id, newCurrentDayData);
};

export const upsertHistory = (newCurrentDayDataID: string): void => {
  const { currentDay, currentMonth } = getCurrentDayAndMonth();
  const history = { ...getValueByKey("history") };
  history[currentMonth][currentDay] = newCurrentDayDataID;
  setValueByKey("history", history);
};

export const newCurrentDayData = {
  id: nanoid(),
  mood: {},
  thoughts: [],
  goals: [],
  createdAt: new Date().toLocaleString(),
  updatedAt: new Date().toLocaleString(),
};
