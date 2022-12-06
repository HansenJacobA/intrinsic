export interface Day extends RequiredTypes {
  mood?: Mood;
  thoughts?: Thought[];
  goals?: Goal[];
}

export interface Mood extends RequiredTypes {
  emoji?: string;
  description?: string;
}

export interface Thought extends RequiredTypes {
  thought: string;
}

export interface Goal extends RequiredTypes {
  goal: string;
  completed?: boolean;
  dayId?: Day["id"];
  index: number;
}

export interface RequiredTypes {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface HistoryContainers {
  1: { [index: number]: string };
  2: { [index: number]: string };
  3: { [index: number]: string };
  4: { [index: number]: string };
  5: { [index: number]: string };
  6: { [index: number]: string };
  7: { [index: number]: string };
  8: { [index: number]: string };
  9: { [index: number]: string };
  10: { [index: number]: string };
  11: { [index: number]: string };
  12: { [index: number]: string };
}

export interface HistoricalData {
  numDays: number;
  goalData: {
    numGoals: number;
    numGoalsComplete: number;
    numDays: number;
    averageNumGoalsPerDay: number;
  };
  thoughtData: {
    numThoughts: number;
    averageNumThoughtPerDay: number;
  };
  moodData: {
    numMoods: number;
    averageNumMoodsPerDay: number;
    averageMood: string;
    topMood: string;
    moodCounts: {
      happy: { emoji: string; count: number };
      peaceful: { emoji: string; count: number };
      studious: { emoji: string; count: number };
      proud: { emoji: string; count: number };
      excited: { emoji: string; count: number };
      crazy: { emoji: string; count: number };
      confused: { emoji: string; count: number };
      sad: { emoji: string; count: number };
      angry: { emoji: string; count: number };
      embarrassed: { emoji: string; count: number };
      sleepy: { emoji: string; count: number };
      unwell: { emoji: string; count: number };
      speechless: { emoji: string; count: number };
      pensive: { emoji: string; count: number };
    };
  };
}
