import { nanoid } from "nanoid";
import getValueByKey from "../getValueByKey";
import setValueByKey from "../setValueByKey";

export const getCurrentDayAndMonth = () => {
  return {
    currentDay: new Date().getDate(),
    currentMonth: new Date().getMonth() + 1,
  };
};

export const getCurrentDayData = () => {
  const { currentDay, currentMonth } = getCurrentDayAndMonth();
  const history = getValueByKey("history");
  const dayID = history[currentMonth][currentDay];
  const currentDayData = getValueByKey(dayID);

  if (currentDayData) return currentDayData;

  const newCurrentDayData = {
    id: nanoid(),
    mood: {},
    thoughts: [],
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  };
  upsertHistory(newCurrentDayData.id);
  return newCurrentDayData;
};

export const upsertDay = (newCurrentDayData: Day) => {
  newCurrentDayData.updatedAt = new Date().toLocaleString();
  setValueByKey(newCurrentDayData.id, newCurrentDayData);
};

export const upsertHistory = (newCurrentDayDataID: string) => {
  const { currentDay, currentMonth } = getCurrentDayAndMonth();
  const history = { ...getValueByKey("history") };
  history[currentMonth][currentDay] = newCurrentDayDataID;
  setValueByKey("history", history);
};
