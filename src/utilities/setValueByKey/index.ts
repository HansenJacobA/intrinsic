import { Day, HistoricalData, HistoryContainers } from "../../types";

export default function setValueByKey(
  key: string,
  value: HistoryContainers | HistoricalData | Day
): void {
  localStorage.setItem(key, JSON.stringify(value));
}
