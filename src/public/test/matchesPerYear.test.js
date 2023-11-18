/* eslint-disable no-undef */
const { matchesPerYear } = require("../../server/matchesPerYear");

test("When there is no match", () => {
  expect(matchesPerYear([])).toEqual({});
});
test("When there is only one match", () => {
  expect(matchesPerYear([{ season: "2016" }])).toEqual({ 2016: 1 });
});
test("When there is more than one match in similar season", () => {
  expect(
    matchesPerYear([{ season: "2016" }, { season: "2016" }, { season: "2016" }])
  ).toEqual({
    2016: 3,
  });
});
test("When there is match in different season", () => {
  expect(
    matchesPerYear([{ season: "2016" }, { season: "2017" }, { season: "2018" }])
  ).toEqual({
    2016: 1,
    2017: 1,
    2018: 1,
  });
});
test("When there is more match in different season", () => {
  expect(
    matchesPerYear([
      { season: "2016" },
      { season: "2017" },
      { season: "2018" },
      { season: "2018" },
      { season: "2018" },
      { season: "2017" },
    ])
  ).toEqual({
    2016: 1,
    2017: 2,
    2018: 3,
  });
});
