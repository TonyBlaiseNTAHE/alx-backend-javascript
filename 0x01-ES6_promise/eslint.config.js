// Import the necessary configurations and plugins
import js from '@eslint/js';
import airbnbBase from 'eslint-config-airbnb-base';
import importPlugin from 'eslint-plugin-import';
import jestPlugin from 'eslint-plugin-jest';

// Export the flat config array
export default [
  js.configs.recommended, // ESLint's built-in recommended config
  airbnbBase, // Airbnb Base config
  {
    plugins: {
      jest: jestPlugin,
      import: importPlugin, // ESLint plugin for handling imports
    },
    rules: {
      'no-console': 'off',
      'no-shadow': 'off',
      'no-restricted-syntax': [
        'error',
        'LabeledStatement',
        'WithStatement',
      ],
    },
  },
];
