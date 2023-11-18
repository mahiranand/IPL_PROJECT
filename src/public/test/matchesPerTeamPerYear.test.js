/* eslint-disable no-undef */
const { matchesPerTeamPerYear } = require("../../server/matchesPerTeamPerYear");

test("When no team is playing", () => {
  expect(matchesPerTeamPerYear([])).toEqual({});
});
test("when only one team is playing match", () => {
  expect(
    matchesPerTeamPerYear([{ season: "2008", winner: "chennai" }])
  ).toEqual({
    2008: { chennai: 1 },
  });
});
test("When multiple team plays match", () => {
  expect(
    matchesPerTeamPerYear([
      { season: "2008", winner: "chennai" },
      { season: "2008", winner: "kolkata" },
    ])
  ).toEqual({
    2008: { chennai: 1, kolkata: 1 },
  });
});
test("When season match played by same team", () => {
  expect(
    matchesPerTeamPerYear([
      { season: "2008", winner: "chennai" },
      { season: "2009", winner: "chennai" },
    ])
  ).toEqual({
    2008: { chennai: 1 },
    2009: { chennai: 1 },
  });
});
test("When season match played by multiple team", () => {
  expect(
    matchesPerTeamPerYear([
      { season: "2008", winner: "chennai" },
      { season: "2008", winner: "chennai" },
      { season: "2009", winner: "chennai" },
      { season: "2008", winner: "kolkata" },
      { season: "2010", winner: "pune" },
    ])
  ).toEqual({
    2008: { chennai: 2, kolkata: 1 },
    2009: { chennai: 1 },
    2010: { pune: 1 },
  });
});
