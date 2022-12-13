import { nanoid } from "nanoid";
import { Day } from "../../types";
import getValueByKey from "../getValueByKey";
import setValueByKey from "../setValueByKey";

export const getCurrentDayData = (): Day => {
  const allDayIds = getValueByKey("allDayIds");
  const currentDayId = allDayIds[0];
  const currentDayData = getValueByKey(currentDayId);
  return currentDayData;
};

export const upsertDay = (newCurrentDayData: Day): void => {
  newCurrentDayData.updatedAt = new Date().toLocaleString();
  setValueByKey(newCurrentDayData.id, newCurrentDayData);
};

export const newCurrentDayData = {
  id: nanoid(),
  mood: {},
  thoughts: [],
  goals: [],
  createdAt: new Date().toLocaleString(),
  updatedAt: new Date().toLocaleString(),
};
