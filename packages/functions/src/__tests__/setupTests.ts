/* eslint-disable @typescript-eslint/no-explicit-any */
jest.mock("firebase-admin", () => ({
  initializeApp: jest.fn().mockReturnValue({firestore: jest.fn()}),
  credential: {
    cert: jest.fn().mockImplementation(props => props),
  },
}));

export {};
