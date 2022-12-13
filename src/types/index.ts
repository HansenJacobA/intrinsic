export interface RequiredTypes {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface Day extends RequiredTypes {
  goals?: Goal[];
  thoughts?: Thought[];
  mood?: Mood;
  year?: string;
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
