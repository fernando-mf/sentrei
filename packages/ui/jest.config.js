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
  moduleFileExtensions: ["js", "ts", "tsx"],
  setupFiles: ["<rootDir>/src/__tests__/setupTests.ts"],
  collectCoverage: true,
  verbose: true,
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/*.spec.{ts,tsx}",
    "!**/*.stories.tsx",
    "!**/node_modules/**",
  ],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.test.json",
    },
  },
};
