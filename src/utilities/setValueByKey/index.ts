import {
  Day,
  HistoricalData,
  MonthsAndDaysByNumberAndDayIds,
  MonthsByNumberAndOrderedDays,
} from "../../types";

export default function setValueByKey(
  key: string,
  value:
    | MonthsAndDaysByNumberAndDayIds
    | MonthsByNumberAndOrderedDays
    | HistoricalData
    | Day
    | []
): void {
  localStorage.setItem(key, JSON.stringify(value));
}
