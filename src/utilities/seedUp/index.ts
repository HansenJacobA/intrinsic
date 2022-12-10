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
  const allYears = getValueByKey("allYears");
  if (allYears === null) {
    setValueByKey("allYears", []);
    setValueByKey("historicalData", templateHistoricalData);
  }

  const currentYear = getCurrentYear();
  if (getValueByKey(currentYear) === null) {
    const yearData = getValueByKey("allYears");
    yearData.push(currentYear);
    setValueByKey("allYears", yearData);
    setValueByKey(currentYear, monthsAndDaysByNumberAndDayIds);
    upsertYearData(newCurrentDayData.id);
  }

  if (getCurrentDayData() === null) {
    setValueByKey(newCurrentDayData.id, newCurrentDayData);
    addHistoricalDataDayCount();
  }
}
