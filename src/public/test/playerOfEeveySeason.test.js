/* eslint-disable no-undef */
const { playerOfEverySeason } = require("../../server/playerOfEverySeason");

test("when no match player", () => {
  expect(playerOfEverySeason([])).toEqual({});
});

test("when one player in that season in player of the match", () => {
  expect(
    playerOfEverySeason([{ player_of_match: "mahir", season: "2008" }])
  ).toEqual({ 2008: { mahir: 1 } });
});

test("when one player in that season in player of the match and in more than one game", () => {
  expect(
    playerOfEverySeason([
      { player_of_match: "mahir", season: "2008" },
      { player_of_match: "mahir", season: "2008" },
      { player_of_match: "hero", season: "2008" },
      { player_of_match: "hero", season: "2008" },
    ])
  ).toEqual({ 2008: { mahir: 2, hero: 2 } });
});

test("more than one player in same season", () => {
  expect(
    playerOfEverySeason([
      { player_of_match: "mahir", season: "2008" },
      { player_of_match: "hero", season: "2008" },
    ])
  ).toEqual({ 2008: { mahir: 1, hero: 1 } });
});

test("different season and differnent player ", () => {
  expect(
    playerOfEverySeason([
      { player_of_match: "mahir", season: "2008" },
      { player_of_match: "hero", season: "2009" },
    ])
  ).toEqual({ 2008: { mahir: 1 }, 2009: { hero: 1 } });
});
