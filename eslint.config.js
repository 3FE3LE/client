[
  {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
    plugins: ['@typescript-eslint'],
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
  },
];
