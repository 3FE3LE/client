module.exports = {
  projects: [
    '<rootDir>/apps/opt',
    '<rootDir>/apps/suite',
    '<rootDir>/apps/web',
    '<rootDir>/packages/ui',
  ],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  preset: 'ts-jest',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  // Asegúrate de que tus directorios de cobertura estén bien configurados
  collectCoverageFrom: [
    'apps/opt/**/*.ts',
    'apps/opt/**/*.tsx',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/*.d.ts',
  ],
};
