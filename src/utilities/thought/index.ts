import { nanoid } from "nanoid";

export const upsertThought = (thought: string): Thought => {
  return {
    id: nanoid(),
    thought,
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  };
};
