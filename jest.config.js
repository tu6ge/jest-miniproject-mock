module.exports = {  
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: [
    'js',
    'ts',
  ],
  collectCoverage: true,
  coverageDirectory: "coverage",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
  collectCoverageFrom: [
    "src/**/*.{js,ts}",
  ],
}