module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    jest: true,
  },
  extends: [
    'plugin:import/recommended',
    'plugin:import/typescript',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
    project: './tsconfig.json',
  },
  plugins: ['prettier', 'react', '@typescript-eslint'],
  reportUnusedDisableDirectives: true,
  ignorePatterns: ['coverage', 'build'],
  settings: {},
  rules: {
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-props-no-spreading': [
      'error',
      {
        custom: 'ignore',
      },
    ],
    'react/require-default-props': 'off',
    'no-restricted-exports': [
      'error',
      {
        restrictedNamedExports: [],
      },
    ],
    'no-restricted-imports': ['error'],
    'import/prefer-default-export': 'off',
    'arrow-body-style': ['error', 'always'],
    'func-names': ['error', 'always'],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: true,
      },
    ],
    'func-style': [
      'error',
      'declaration',
      {
        allowArrowFunctions: false,
      },
    ],
  },
};
