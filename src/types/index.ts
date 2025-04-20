
export interface JournalEntry {
  id: string;
  date: string;
  title: string;
  content: string;
  images?: string[];
  files?: string[];
  tags?: string[];
  mood?: string;
  location?: string;
}

export interface AnalyticsData {
  wordCountByDay: {
    date: string;
    count: number;
  }[];
  moodDistribution: {
    mood: string;
    count: number;
  }[];
  topWords: {
    word: string;
    count: number;
  }[];
  entriesPerWeekday: {
    day: string;
    count: number;
  }[];
  tagsUsage: {
    tag: string;
    count: number;
  }[];
}
