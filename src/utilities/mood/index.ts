import { nanoid } from "nanoid";
import { Day, Mood } from "../../types";

export const moodOptions = [
  { emoji: "😁", description: "happy" },
  { emoji: "😌", description: "peaceful" },
  { emoji: "🤓", description: "studious" },
  { emoji: "🥹", description: "proud" },
  { emoji: "🥳", description: "excited" },
  { emoji: "🤪", description: "crazy" },
  { emoji: "😵‍💫", description: "confused" },
  { emoji: "😔", description: "sad" },
  { emoji: "🤬", description: "angry" },
  { emoji: "😳", description: "embarrassed" },
  { emoji: "😴", description: "sleepy" },
  { emoji: "🤧", description: "unwell" },
  { emoji: "😶", description: "speechless" },
  { emoji: "🤔", description: "pensive" },
];

export const createMood = (emoji: string, description: string): Mood => {
  return {
    id: nanoid(),
    emoji,
    description,
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  };
};

export const upsertMood = (
  currentDayData: Day,
  emoji: string,
  description: string
): Mood => {
  return currentDayData.mood.emoji
    ? {
        ...currentDayData.mood,
        emoji,
        description,
        updatedAt: new Date().toLocaleString(),
      }
    : createMood(emoji, description);
};
