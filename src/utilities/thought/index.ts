import { nanoid } from "nanoid";
import { Thought } from "../../types";
import { addHistoricalDataThoughtData } from "../historicalData.ts";

export const upsertThought = (thought: string): Thought => {
  addHistoricalDataThoughtData();
  return {
    id: nanoid(),
    thought,
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  };
};
