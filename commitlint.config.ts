import type { UserConfig } from '@commitlint/types';
import { RuleConfigSeverity } from '@commitlint/types';

const config: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test'],
    ],

    'type-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],
    'scope-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],
    'subject-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],
    'subject-empty': [RuleConfigSeverity.Error, 'never'],
    'subject-full-stop': [RuleConfigSeverity.Error, 'never', '.'],
    'header-max-length': [RuleConfigSeverity.Error, 'always', 72],
  },
};

export default config;
