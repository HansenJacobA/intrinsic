import {
  Day,
  HistoricalData,
  MonthsAndDaysByNumberAndDayIds,
} from "../../types";

export default function setValueByKey(
  key: string,
  value: MonthsAndDaysByNumberAndDayIds | HistoricalData | Day | []
): void {
  localStorage.setItem(key, JSON.stringify(value));
}
