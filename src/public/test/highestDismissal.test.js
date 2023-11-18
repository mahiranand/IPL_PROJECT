/* eslint-disable no-undef */
const { highestDismissal } = require("../../server/highestDismissal");

test("when no data is given", () => {
  expect(highestDismissal([])).toEqual([]);
});

test("when there is no out", () => {
  expect(highestDismissal([{ dismissal_kind: "run out" }])).toEqual([]);
});

test("when there is one out", () => {
  expect(
    highestDismissal([
      { dismissal_kind: "", player_dismissed: "mahir", bowler: "anand" },
      { dismissal_kind: "bowled", player_dismissed: "mahir", bowler: "anand" },
    ])
  ).toEqual([{ bowler: "anand", batsman: "mahir", dismissal: 1 }]);
});

test("when there is multiple out of differnt kind", () => {
  expect(
    highestDismissal([
      { dismissal_kind: "bowled", player_dismissed: "mahir", bowler: "anand" },
      { dismissal_kind: "lbw", player_dismissed: "mahir", bowler: "anand" },
    ])
  ).toEqual([{ bowler: "anand", batsman: "mahir", dismissal: 2 }]);
});

test("when there is multiple player and multiple out of differnt kind", () => {
  expect(
    highestDismissal([
      { dismissal_kind: "bowled", player_dismissed: "hero", bowler: "anand" },
      { dismissal_kind: "lbw", player_dismissed: "mahir", bowler: "anand" },
      { dismissal_kind: "lbw", player_dismissed: "mahir", bowler: "anand" },
      { dismissal_kind: "lbw", player_dismissed: "mahir", bowler: "anand" },
    ])
  ).toEqual([{ bowler: "anand", batsman: "mahir", dismissal: 3 }]);
});
