export interface Day extends RequiredTypes {
  mood?: Mood;
  thoughts?: Thought[];
  goals?: Goal[];
}

export interface Mood extends RequiredTypes {
  emoji: string;
  description: string;
}

export interface Thought extends RequiredTypes {
  thought: string;
}

export interface Goal extends RequiredTypes {
  goal: string;
  completed: boolean;
}

export interface RequiredTypes {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
}
