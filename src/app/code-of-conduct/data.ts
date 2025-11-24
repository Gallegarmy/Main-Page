import { CodeOfConductSection } from '@/types/CodeOfConduct';

export const codeOfConductSections: CodeOfConductSection[] = [
  {
    id: 'general',
    titleKey: 'codeOfConduct.general.title',
    rules: ['rule1', 'rule2', 'rule3', 'rule4', 'rule5', 'rule6'],
  },
  {
    id: 'telegram',
    titleKey: 'codeOfConduct.telegram.title',
    rules: ['rule1'],
  },
  {
    id: 'collaboration',
    titleKey: 'codeOfConduct.collaboration.title',
    rules: ['rule1', 'rule2', 'rule3'],
  },
  {
    id: 'sanctions',
    titleKey: 'codeOfConduct.sanctions.title',
    rules: ['rule1'],
  },
];
