const matches = require("./src/data/matches.json");
const deliveries = require("./src/data/deliveries.json");
const fs = require("fs");
const { matchesPerYear } = require("./src/server/matchesPerYear");
const { matchesPerTeamPerYear } = require("./src/server/matchesPerTeamPerYear");
const { extraRunsConceded } = require("./src/server/extraRunsConceded");
const { topTenBowler2015 } = require("./src/server/topTenBowler2015");
const { tossAndMatchWin } = require("./src/server/tossAndMatchWin");
const { playerOfEverySeason } = require("./src/server/playerOfEverySeason");
const { strikeRateOfBatsman } = require("./src/server/strikeRateOfBatsman");
const { highestDismissal } = require("./src/server/highestDismissal");

const ans1 = matchesPerYear(matches);
fs.writeFileSync(
  "./src/public/output/matchesPerYear.json",
  JSON.stringify(ans1)
);

const ans2 = matchesPerTeamPerYear(matches);
fs.writeFileSync(
  "./src/public/output/matchesPerTeamPerYear.json",
  JSON.stringify(ans2)
);

const ans3 = extraRunsConceded(matches, deliveries);
fs.writeFileSync(
  "./src/public/output/extraRunsConceded.json",
  JSON.stringify(ans3)
);

const ans4 = topTenBowler2015(matches, deliveries);
fs.writeFileSync(
  "./src/public/output/topTenBowler2015.json",
  JSON.stringify(ans4)
);

const ans5 = tossAndMatchWin(matches);
fs.writeFileSync(
  "./src/public/output/tossAndMatchWin.json",
  JSON.stringify(ans5)
);

const ans6 = playerOfEverySeason(matches);
fs.writeFileSync(
  "./src/public/output/playerOfEverySeason.json",
  JSON.stringify(ans6)
);

const ans7 = strikeRateOfBatsman(matches, deliveries, "CA Lynn");
fs.writeFileSync(
  "./src/public/output/strikeRateOfBatsman.json",
  JSON.stringify(ans7)
);

const ans8 = highestDismissal(deliveries);
fs.writeFileSync(
  "./src/public/output/highestDismissal.json",
  JSON.stringify(ans8)
);
