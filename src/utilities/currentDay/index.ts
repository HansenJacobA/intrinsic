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

export const upsertYearData = (
  currentYear: string,
  newCurrentDayDataID: string
): void => {
  const { currentDay, currentMonth } = getCurrentDayAndMonth();
  const yearData = { ...getValueByKey(currentYear) };
  yearData[currentMonth][currentDay] = newCurrentDayDataID;
  setValueByKey(currentYear, yearData);

  const orderedDayIdsByDate = getValueByKey(
    `${currentYear}OrderedDayIdsByDate`
  );
  orderedDayIdsByDate[currentMonth].push(newCurrentDayDataID);
  setValueByKey(`${currentYear}OrderedDayIdsByDate`, orderedDayIdsByDate);
};

export const newCurrentDayData = {
  id: nanoid(),
  mood: {},
  thoughts: [],
  goals: [],
  year: getCurrentYear(),
  createdAt: new Date().toLocaleString(),
  updatedAt: new Date().toLocaleString(),
};
