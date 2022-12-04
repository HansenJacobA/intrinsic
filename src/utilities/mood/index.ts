import { nanoid } from "nanoid";

export const moodOptions = [
  { emoji: "😁", description: "happy" },
  { emoji: "😌", description: "peaceful" },
  { emoji: "🤓", description: "studious" },
  { emoji: "🥳", description: "excited" },
  { emoji: "🤪", description: "crazy" },
  { emoji: "😵‍💫", description: "confused" },
  { emoji: "😔", description: "sad" },
  { emoji: "🤬", description: "angry" },
  { emoji: "😳", description: "embarrassed" },
  { emoji: "😴", description: "sleepy" },
  { emoji: "😶", description: "speechless" },
  { emoji: "🤔", description: "pensive" },
];

export const createMood = (emoji: string, description: string) => {
  return {
    id: nanoid(),
    emoji,
    description,
    createdAt: new Date().toLocaleString(),
  };
};
