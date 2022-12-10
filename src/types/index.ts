export interface RequiredTypes {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface Day extends RequiredTypes {
  goals?: Goal[];
  thoughts?: Thought[];
  mood?: Mood;
  year?: number;
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

export interface Mood extends RequiredTypes {
  emoji?: string;
  description?: string;
}

export interface MoodOption {
  emoji: string;
  description: string;
}

export interface MonthsAndDaysByNumberAndDayIds {
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

export interface MonthsByNumberAndOrderedDays {
  1: Day[];
  2: Day[];
  3: Day[];
  4: Day[];
  5: Day[];
  6: Day[];
  7: Day[];
  8: Day[];
  9: Day[];
  10: Day[];
  11: Day[];
  12: Day[];
}

export interface MonthNameByMonthNumber {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
  12: string;
}

export interface HistoricalData {
  startingYear: number;
  numDays: number;
  goalData: {
    numGoals: number;
    numGoalsComplete: number;
    numDays: number;
    averageNumGoalsPerDay: number;
  };
  thoughtData: {
    numThoughts: number;
    averageNumThoughtsPerDay: number;
  };
  moodData: {
    numMoods: number;
    averageNumMoodsPerDay: number;
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

export interface HistoricalDataCardText {
  description: string;
  value: number | string;
}

export interface CurrentDayAndMonth {
  currentDay: number;
  currentMonth: number;
}

export interface NavBarLinkNameAndUrl {
  linkName: string;
  url: string;
}
