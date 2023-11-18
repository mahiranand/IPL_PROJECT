/* eslint-disable no-undef */
const { extraRunsConceded } = require("../../server/extraRunsConceded");

test("When 0 teams is playing", () => {
  expect(extraRunsConceded([], [])).toEqual({});
});

test("When one team is playing", () => {
  expect(
    extraRunsConceded(
      [{ id: "1", season: "2016" }],
      [{ match_id: "1", extra_runs: "10", bowling_team: "pune" }]
    )
  ).toEqual({ pune: 10 });
});

test("When team is playing in different season", () => {
  expect(
    extraRunsConceded(
      [{ id: "1", season: "2015" }],
      [{ match_id: "1", extra_runs: "10", bowling_team: "pune" }]
    )
  ).toEqual({});
});

test("When one team is playing multiple matches", () => {
  expect(
    extraRunsConceded(
      [{ id: "1", season: "2016" }],
      [
        { match_id: "1", extra_runs: "10", bowling_team: "pune" },
        { match_id: "1", extra_runs: "5", bowling_team: "pune" },
      ]
    )
  ).toEqual({ pune: 15 });
});

test("When multiple team is playing multiple matches", () => {
  expect(
    extraRunsConceded(
      [
        { id: "1", season: "2016" },
        { id: "2", season: "2015" },
      ],
      [
        { match_id: "1", extra_runs: "10", bowling_team: "pune" },
        { match_id: "1", extra_runs: "5", bowling_team: "pune" },
        { match_id: "2", extra_runs: "8", bowling_team: "pune" },
        { match_id: "2", extra_runs: "9", bowling_team: "pune" },
        { match_id: "1", extra_runs: "3", bowling_team: "chennai" },
      ]
    )
  ).toEqual({ pune: 15, chennai: 3 });
});
