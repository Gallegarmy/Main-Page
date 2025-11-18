export interface TimelineCity {
  id: string;
  name: string;
  timeline: TimelineEntry[];
}

export interface TimelineEntry {
  id: string;
  image: string;
  month: string;
  year: number;
}
