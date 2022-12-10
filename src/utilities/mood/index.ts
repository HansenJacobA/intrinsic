import { nanoid } from "nanoid";
import { Day, Mood, MoodOption } from "../../types";
import { addHistoricalDataMoodData } from "../historicalData.ts";

export const moodOptions: MoodOption[] = [
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

export const createMood = ({ emoji, description }: MoodOption): Mood => {
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
  { emoji, description }: MoodOption
): Mood => {
  addHistoricalDataMoodData(description);

  return currentDayData.mood.emoji
    ? {
        ...currentDayData.mood,
        emoji,
        description,
        updatedAt: new Date().toLocaleString(),
      }
    : createMood({ emoji, description });
};
