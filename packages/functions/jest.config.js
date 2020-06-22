module.exports = {
  roots: ["<rootDir>/src"],
  preset: "ts-jest",
  testEnvironment: "node",
  testTimeout: 30000,
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/src/__tests__/testHelpers.ts",
  ],
  moduleFileExtensions: ["js", "json", "ts"],
  moduleNameMapper: {
    "@sentrei/common/(.*)": "<rootDir>/../common/src/$1",
    "@sentrei/functions/(.*)": "<rootDir>/src/$1",
  },
  collectCoverage: true,
  verbose: true,
  collectCoverageFrom: [
    "**/*.{js,ts}",
    "!**/*.d.ts",
    "!**/*.spec.{ts,tsx}",
    "!**/node_modules/**",
  ],
  globals: {
    "ts-jest": {
      importHelpers: true,
      tsConfig: "<rootDir>/tsconfig.test.json",
    },
  },
};
