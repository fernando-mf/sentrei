import getNameFromEmail from "@sentrei/functions/helpers/getNameFromEmail";

it("should return a name coming before @", () => {
  expect(getNameFromEmail("shunkakinoki@gmail.com")).toBe("shunkakinoki");
});
