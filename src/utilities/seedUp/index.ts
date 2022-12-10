import {
  getCurrentDayData,
  newCurrentDayData,
  upsertYearData,
} from "../currentDay";
import getValueByKey from "../getValueByKey";
import setValueByKey from "../setValueByKey";
import {
  monthsAndDaysByNumberAndDayIds,
  templateHistoricalData,
  addHistoricalDataDayCount,
} from "../historicalData.ts";
import { getCurrentYear } from "../getCurrentYear";

export default function seedUp(): void {
  const currentYear = getCurrentYear();
  if (getValueByKey(currentYear) === null) {
    setValueByKey(currentYear, monthsAndDaysByNumberAndDayIds);
    setValueByKey("historicalData", templateHistoricalData);
    setValueByKey(newCurrentDayData.id, newCurrentDayData);
    upsertYearData(newCurrentDayData.id);
    addHistoricalDataDayCount();
  }
  if (getCurrentDayData() === null) {
    setValueByKey(newCurrentDayData.id, newCurrentDayData);
    addHistoricalDataDayCount();
  }
}
