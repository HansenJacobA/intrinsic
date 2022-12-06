import { Day } from "../../types";
import getValueByKey from "../getValueByKey";
import removeValueByKey from "../removeValueByKey";

export default function seedDown(): void {
  const history = getValueByKey("history");
  Object.values(history).forEach((monthNumber: number) => {
    Object.values(monthNumber).forEach((dayNumber: number) => {
      Object.values(dayNumber).forEach((id: Day["id"]) => {
        removeValueByKey(id);
      });
    });
  });
  removeValueByKey("history");
  removeValueByKey("historicalData");
}
