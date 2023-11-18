/* eslint-disable no-undef */
const { strikeRateOfBatsman } = require("../../server/strikeRateOfBatsman");

test("When no batsman is given", () => {
  expect(strikeRateOfBatsman([], [])).toEqual({});
});

test("When no data is given", () => {
  expect(strikeRateOfBatsman([], [], "")).toEqual({});
});

test("When one batsman is given", () => {
  expect(
    strikeRateOfBatsman(
      [{ id: 1, season: "2008" }],
      [
        {
          match_id: 1,
          batsman_runs: 1,
          batsman: "mahir",
          wide_runs: 0,
          noball_runs: 0,
        },
      ],
      "mahir"
    )
  ).toEqual({ 2008: { runs: 1, balls: 1, strike_rate: "100.00" } });
});

test("When one wide ball or no ball", () => {
  expect(
    strikeRateOfBatsman(
      [{ id: 1, season: "2008" }],
      [
        {
          match_id: 1,
          batsman_runs: 1,
          batsman: "mahir",
          wide_runs: 0,
          noball_runs: 0,
        },
        {
          match_id: 1,
          batsman_runs: 2,
          batsman: "mahir",
          wide_runs: 0,
          noball_runs: 0,
        },
        {
          match_id: 1,
          batsman_runs: 2,
          batsman: "mahir",
          wide_runs: 1,
          noball_runs: 0,
        },
      ],
      "mahir"
    )
  ).toEqual({ 2008: { runs: 5, balls: 2, strike_rate: "250.00" } });
});

test("When one different player comes", () => {
  expect(
    strikeRateOfBatsman(
      [{ id: 1, season: "2008" }],
      [
        {
          match_id: 1,
          batsman_runs: 1,
          batsman: "mahir",
          wide_runs: 0,
          noball_runs: 0,
        },
        {
          match_id: 1,
          batsman_runs: 2,
          batsman: "mahir",
          wide_runs: 0,
          noball_runs: 0,
        },
        {
          match_id: 1,
          batsman_runs: 2,
          batsman: "mahir",
          wide_runs: 1,
          noball_runs: 0,
        },
        {
          match_id: 1,
          batsman_runs: 2,
          batsman: "anand",
          wide_runs: 1,
          noball_runs: 0,
        },
      ],
      "mahir"
    )
  ).toEqual({ 2008: { runs: 5, balls: 2, strike_rate: "250.00" } });
});
