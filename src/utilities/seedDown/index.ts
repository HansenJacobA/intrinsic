import { Day } from "../../types";
import getValueByKey from "../getValueByKey";
import removeValueByKey from "../removeValueByKey";

export default function seedDown(): void {
  const history = getValueByKey("history");
  Object.values(history).forEach((monthNumber) => {
    Object.values(monthNumber).forEach((dayNumber) => {
      Object.values(dayNumber).forEach((id: Day["id"]) => {
        removeValueByKey(id);
      });
    });
  });
  removeValueByKey("history");
}
