/* eslint-disable no-undef */
const { bestSuperOverBowler } = require("../../server/bestSuperOverBowler");

test("Whem data is empty", () => {
  expect(bestSuperOverBowler([])).toEqual([]);
});

test("Whem no superover is empty", () => {
  expect(bestSuperOverBowler([{ is_super_over: "0" }])).toEqual([]);
});

test("Whem one player did superover", () => {
  expect(
    bestSuperOverBowler([
      {
        is_super_over: "1",
        bowler: "mahir",
        batsman_runs: "1",
        wide_runs: "0",
        noball_runs: "0",
      },
    ])
  ).toEqual([{ bowler: "mahir", economy: 6 }]);
});

test("Whem one player did superover", () => {
  expect(
    bestSuperOverBowler([
      {
        is_super_over: "1",
        bowler: "mahir",
        batsman_runs: "1",
        wide_runs: "0",
        noball_runs: "0",
      },
      {
        is_super_over: "1",
        bowler: "mahir",
        batsman_runs: "0",
        wide_runs: "1",
        noball_runs: "0",
      },
    ])
  ).toEqual([{ bowler: "mahir", economy: 12 }]);
});

test("Whem one player did superover", () => {
  expect(
    bestSuperOverBowler([
      {
        is_super_over: "1",
        bowler: "anand",
        batsman_runs: "1",
        wide_runs: "0",
        noball_runs: "0",
      },
      {
        is_super_over: "1",
        bowler: "mahir",
        batsman_runs: "1",
        wide_runs: "0",
        noball_runs: "0",
      },
    ])
  ).toEqual([
    { bowler: "anand", economy: 6 },
    { bowler: "mahir", economy: 6 },
  ]);
});
