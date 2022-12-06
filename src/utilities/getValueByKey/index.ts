import { Day } from "../../types";

export default function getValueByKey(key: string): Day {
  const storedValue = JSON.parse(localStorage.getItem(key));
  return storedValue;
}
