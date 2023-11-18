/* eslint-disable no-undef */
const { topTenBowler2015 } = require("../../server/topTenBowler2015");

test("When no match is played", () => {
  expect(topTenBowler2015([], [])).toEqual([]);
});

test("When 1 match is played", () => {
  expect(
    topTenBowler2015(
      [{ id: "1", season: "2015" }],
      [
        {
          match_id: "1",
          bowler: "yuzi",
          wide_runs: "0",
          noball_runs: "0",
          batsman_runs: "2",
        },
      ]
    )
  ).toEqual([{ bowler: "yuzi", economy: "12.00" }]);
});

test("When 1 match is played and multiple delivery", () => {
  expect(
    topTenBowler2015(
      [{ id: "1", season: "2015" }],
      [
        {
          match_id: "1",
          bowler: "yuzi",
          wide_runs: "0",
          noball_runs: "0",
          batsman_runs: "2",
        },
        {
          match_id: "1",
          bowler: "yuzi",
          wide_runs: "0",
          noball_runs: "0",
          batsman_runs: "0",
        },
      ]
    )
  ).toEqual([{ bowler: "yuzi", economy: "6.00" }]);
});

test("When multipler player played and multiple delivery", () => {
  expect(
    topTenBowler2015(
      [{ id: "1", season: "2015" }],
      [
        {
          match_id: "1",
          bowler: "yuzi",
          wide_runs: "0",
          noball_runs: "0",
          batsman_runs: "2",
        },
        {
          match_id: "1",
          bowler: "yuzi",
          wide_runs: "0",
          noball_runs: "0",
          batsman_runs: "0",
        },
        {
          match_id: "1",
          bowler: "mahir",
          wide_runs: "0",
          noball_runs: "0",
          batsman_runs: "0",
        },
      ]
    )
  ).toEqual([
    { bowler: "mahir", economy: "0.00" },
    { bowler: "yuzi", economy: "6.00" },
  ]);
});

test("When multiple player and multiple delivery but also differnt season", () => {
    expect(
      topTenBowler2015(
        [{ id: "1", season: "2015" }],
        [
          {
            match_id: "1",
            bowler: "yuzi",
            wide_runs: "0",
            noball_runs: "0",
            batsman_runs: "2",
          },
          {
            match_id: "1",
            bowler: "yuzi",
            wide_runs: "1",
            noball_runs: "0",
            batsman_runs: "0",
          },
          {
            match_id: "1",
            bowler: "mahir",
            wide_runs: "0",
            noball_runs: "0",
            batsman_runs: "0",
          },
          {
            match_id: "2",
            bowler: "mahir",
            wide_runs: "0",
            noball_runs: "0",
            batsman_runs: "0",
          },
        ]
      )
    ).toEqual([
      { bowler: "mahir", economy: "0.00" },
      { bowler: "yuzi", economy: "18.00" },
    ]);
  });