/* eslint-disable no-undef */
const { tossAndMatchWin } = require("../../server/tossAndMatchWin");

test("Wnen no team plays", () => {
  expect(tossAndMatchWin([])).toEqual({});
});

test("Toss win but match lost", () => {
  expect(
    tossAndMatchWin([{ winnner: "pune", toss_winner: "chennai" }])
  ).toEqual({});
});

test("Toss and Match both wins", () => {
  expect(
    tossAndMatchWin([
      { winner: "pune", toss_winner: "pune" },
      { winner: "pune", toss_winner: "chennai" },
    ])
  ).toEqual({
    pune: 1,
  });
});

test("More than one Toss and Match both wins", () => {
  expect(
    tossAndMatchWin([
      { winner: "pune", toss_winner: "pune" },
      { winner: "pune", toss_winner: "pune" },
    ])
  ).toEqual({ pune: 2 });
});

test("Multiple Team More than one Toss and Match both wins", () => {
  expect(
    tossAndMatchWin([
      { winner: "pune", toss_winner: "pune" },
      { winner: "pune", toss_winner: "pune" },
      { winner: "pune", toss_winner: "pune" },
      { winner: "chennai", toss_winner: "chennai" },
    ])
  ).toEqual({ pune: 3, chennai: 1 });
});
