export interface CityTimeline {
  id: string;
  name: string;
  timeline: TimelineEntry[];
}

export interface TimelineEntry {
  id: string;
  year: number;
  image: string;
  link: string;
}
