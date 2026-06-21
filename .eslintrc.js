module.exports = {
  extends: [
    'next/core-web-vitals',
    'airbnb',
    'airbnb-typescript',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'react/react-in-jsx-scope': 'off', // Disable because of Next.js
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
    'react/require-default-props': 'off', // Disable requiring default prop values for optional props
    'react/no-unescaped-entities': 'off', // Disable unescaped entities checking
    'react/jsx-props-no-spreading': 'off', // Allow spreading props
    'react/button-has-type': 'warn', // Warn about missing button type
    'react/function-component-definition': [
      1,
      {
        namedComponents: ['function-declaration', 'arrow-function'],
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/no-danger': 'off',
    '@typescript-eslint/no-unused-vars': 'warn', // Enable no-unused-vars
    '@typescript-eslint/no-implied-eval': 'off', // Disable because of performance issues
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/interface-name-prefix': 'off', // interface start with capital I
    '@typescript-eslint/no-explicit-any': 'off', // allow "any" as type
    '@typescript-eslint/ban-ts-ignore': 'off', // allow @ts-ignore for testing purposes
    '@typescript-eslint/lines-between-class-members': 'off', // Disable because of thrown errors
    '@typescript-eslint/no-throw-literal': 'off', // Disable because of thrown errors
    'import/prefer-default-export': 'off', // Allow single export per module
    'import/order': 'off', // Disable import order
    'jsx-a11y/click-events-have-key-events': 'warn', // Warn about click events without key events
    'jsx-a11y/no-static-element-interactions': 'warn', // Warn about static elements
    'no-restricted-exports': 'warn',
    'prettier/prettier': [
      // Enable prettier rules
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'prefer-template': 'off', // Disable prefer-template
    'no-nested-ternary': 'off', // Disable nested ternary
    'no-console': 'warn',
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'consistent-return': 'warn',
  },
}
