import { Day } from "../../types";
import getValueByKey from "../getValueByKey";
import removeValueByKey from "../removeValueByKey";

// TODO: Write a test to ensure this works
export default function seedDown(): void {
  removeValueByKey("lastDateUsed");
  const allDayIds = getValueByKey("allDayIds");
  allDayIds.array.forEach((id: Day["id"]) => {
    removeValueByKey(id);
  });
  removeValueByKey("allDayIds");
  removeValueByKey("historicalData");
}
