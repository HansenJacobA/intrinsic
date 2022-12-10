import { Day } from "../../types";
import { getCurrentYear } from "../getCurrentYear";
import getValueByKey from "../getValueByKey";
import removeValueByKey from "../removeValueByKey";

// TODO: Write a test to ensure this works
export default function seedDown(): void {
  const historicalData = getValueByKey("historicalData");
  let startingYear = historicalData.startingYear;
  const endingYear = getCurrentYear();

  while (startingYear.toString() !== endingYear) {
    const yearData = getValueByKey(startingYear);
    Object.values(yearData).forEach((monthNumber: number) => {
      Object.values(monthNumber).forEach((dayNumber: number) => {
        Object.values(dayNumber).forEach((id: Day["id"]) => {
          removeValueByKey(id);
        });
      });
    });
    removeValueByKey(startingYear);
    startingYear += 1;
  }
  removeValueByKey("historicalData");
}
