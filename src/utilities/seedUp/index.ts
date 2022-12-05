import { nanoid } from "nanoid";
import { upsertHistory } from "../currentDay";
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

    const newCurrentDayData = {
      id: nanoid(),
      mood: {},
      thoughts: [],
      goals: [],
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
    };

    setValueByKey(newCurrentDayData.id, newCurrentDayData);
    upsertHistory(newCurrentDayData.id);
  }
}
