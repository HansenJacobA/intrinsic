import { nanoid } from "nanoid";
import getValueByKey from "../getValueByKey";
import setValueByKey from "../setValueByKey";

export const getCurrentDayAndMonth = () => {
  return {
    currentDay: new Date().getDay(),
    currentMonth: new Date().getMonth(),
  };
};

export const getDayData = () => {
  const { currentDay, currentMonth } = getCurrentDayAndMonth();
  const history = getValueByKey("history");
  const dayData = history[currentMonth][currentDay];
  return dayData;
};

export const upsertDay = (update: { mood: Mood }): string => {
  let day = getDayData();

  if (day) {
    day = {
      ...day,
      ...update,
      updatedAt: new Date().toLocaleString(),
    };
    setValueByKey(day.id, day);
  } else {
    day = {
      id: nanoid(),
      ...update,
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
    };
    upsertHistory(day);
  }

  return day.id;
};

export const upsertHistory = (day) => {
  const { currentDay, currentMonth } = getCurrentDayAndMonth();
  const history = getValueByKey("history");
  history[currentMonth][currentDay] = day;
  setValueByKey("history", history);
};
