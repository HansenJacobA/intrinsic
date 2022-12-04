import getValueByKey from "../getValueByKey";
import setValueByKey from "../setValueByKey";

export default function seedUp(): void {
  if (getValueByKey("history") === null) {
    setValueByKey("history", {
      1: {},
      2: {},
      3: {},
      4: {},
      5: {},
      6: {},
      7: {},
      8: {},
      9: {},
      10: {},
      11: {},
      12: {},
    });
  }
}
