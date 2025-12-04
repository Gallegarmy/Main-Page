export type CodeOfConductSectionId = 'general' | 'telegram' | 'collaboration' | 'sanctions';

export interface CodeOfConductSection {
  id: CodeOfConductSectionId;
  titleKey: string;
}

export interface CodeOfConductSectionData {
  title?: string;
  rules?: string[];
}
