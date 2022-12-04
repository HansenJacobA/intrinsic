import { nanoid } from "nanoid";
import { Thought } from "../../types";

export const upsertThought = (thought: string): Thought => {
  return {
    id: nanoid(),
    thought,
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  };
};
