module.exports = {
  roots: ["<rootDir>/src"],
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/src/__tests__/setupTests.ts",
  ],
  moduleFileExtensions: ["js", "ts"],
  moduleNameMapper: {
    "@sentrei/common/(.*)": "<rootDir>/../common/src/$1",
    "@sentrei/ui/(.*)": "<rootDir>/src/$1",
  },
  setupFiles: ["<rootDir>/src/__tests__/setupTests.ts"],
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
