import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'next', 'prettier'],
    rules: {
      '@typescript/no-unused-expressions': 'off',
      'no-console': 'error',
      'no-unused-vars': 'error',
    },
  }),
];

export default eslintConfig;
