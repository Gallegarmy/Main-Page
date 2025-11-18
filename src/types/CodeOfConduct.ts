export type CodeOfConductSectionId = 'general' | 'telegram' | 'collaboration' | 'sanctions';

export interface CodeOfConductRule {
  id: string;
  text: string;
}

export interface CodeOfConductSection {
  id: CodeOfConductSectionId;
  title: string;
  rules: CodeOfConductRule[];
}
