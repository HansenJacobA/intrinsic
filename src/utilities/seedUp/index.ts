import getValueByKey from "../getValueByKey";
import setValueByKey from "../setValueByKey";
import {
  addHistoricalDataDayCount,
  templateHistoricalData,
} from "../historicalData.ts";
import { newCurrentDayData } from "../currentDay";

export default function seedUp(): void {
  const currentDate = new Date().toLocaleDateString();
  const lastDateUsed = getValueByKey("lastDateUsed");
  if (currentDate === lastDateUsed) return;
  setValueByKey("lastDateUsed", currentDate);

  let allDayIds = getValueByKey("allDayIds");
  if (allDayIds === null) {
    setValueByKey("allDayIds", []);
    setValueByKey("historicalData", templateHistoricalData);
  }

  allDayIds = getValueByKey("allDayIds");
  setValueByKey(newCurrentDayData.id, newCurrentDayData);
  addHistoricalDataDayCount();
  allDayIds.unshift(newCurrentDayData.id);
  setValueByKey("allDayIds", allDayIds);
}
