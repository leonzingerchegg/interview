const dedupe = require("./dedupe");

test("dedupe", () => {
  const expected = ["a", "b", "c", "d"];
  const result = dedupe(["a", "b", "b", "c", "d", "a"]);

  expect(result).toEqual(expected);
});
