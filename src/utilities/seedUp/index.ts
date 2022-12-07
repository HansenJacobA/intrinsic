import {
  getCurrentDayData,
  newCurrentDayData,
  upsertHistory,
} from "../currentDay";
import getValueByKey from "../getValueByKey";
import setValueByKey from "../setValueByKey";
import {
  historyContainers,
  templateHistoricalData,
  addHistoricalDataDayCount,
} from "../historicalData.ts";

export default function seedUp(): void {
  if (getValueByKey("history") === null) {
    setValueByKey("history", historyContainers);
    setValueByKey("historicalData", templateHistoricalData);
    setValueByKey(newCurrentDayData.id, newCurrentDayData);
    upsertHistory(newCurrentDayData.id);
    addHistoricalDataDayCount();
  }
  if (getCurrentDayData() === null) {
    setValueByKey(newCurrentDayData.id, newCurrentDayData);
    addHistoricalDataDayCount();
  }
}
