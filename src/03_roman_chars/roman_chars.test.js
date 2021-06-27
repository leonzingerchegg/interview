const romanDecoder = require("./roman_chars.js");

test("XXI should return 21", () => {
  expect(romanDecoder("XXI")).toBe(21);
});

test("I should return 1", () => {
  expect(romanDecoder("I")).toBe(1);
});
