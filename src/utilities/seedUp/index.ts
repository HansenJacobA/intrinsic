import {
  getCurrentDayData,
  newCurrentDayData,
  upsertHistory,
} from "../currentDay";
import getValueByKey from "../getValueByKey";
import setValueByKey from "../setValueByKey";
import { historyContainers, historicalData } from "../historicalData.ts";

export default function seedUp(): void {
  if (getValueByKey("history") === null) {
    setValueByKey("history", historyContainers);
    setValueByKey("historicalData", historicalData);
    setValueByKey(newCurrentDayData.id, newCurrentDayData);
    upsertHistory(newCurrentDayData.id);
  }
  if (getCurrentDayData() === null) {
    setValueByKey(newCurrentDayData.id, newCurrentDayData);
  }
}
