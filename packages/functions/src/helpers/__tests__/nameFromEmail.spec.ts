import nameFromEmail from "../nameFromEmail";

it("should return a name coming before @", () => {
  expect(nameFromEmail("shunkakinoki@gmail.com")).toBe("shunkakinoki");
});
