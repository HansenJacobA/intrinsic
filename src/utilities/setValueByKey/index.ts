import { Day, HistoricalData } from "../../types";

export default function setValueByKey(
  key: string,
  value: HistoricalData | Day | string | []
): void {
  localStorage.setItem(key, JSON.stringify(value));
}
