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
  const dayData = history[currentMonth][currentDay];
  return getValueByKey(dayData);
};

export const upsertDay = (newCurrentDayData: Day): string => {
  if (newCurrentDayData.id) {
    newCurrentDayData = {
      ...newCurrentDayData,
      updatedAt: new Date().toLocaleString(),
    };
  } else {
    newCurrentDayData = {
      id: nanoid(),
      ...newCurrentDayData,
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
    };
    upsertHistory(newCurrentDayData.id);
  }
  setValueByKey(newCurrentDayData.id, newCurrentDayData);
  return newCurrentDayData.id;
};

export const upsertHistory = (newCurrentDayDataID: string) => {
  const { currentDay, currentMonth } = getCurrentDayAndMonth();
  const history = getValueByKey("history");
  history[currentMonth][currentDay] = newCurrentDayDataID;
  setValueByKey("history", history);
};
