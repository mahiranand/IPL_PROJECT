const matches = require("./src/data/matches.json");
const deliveries = require("./src/data/deliveries.json");
const fs = require("fs");
const { matchesPerYear } = require("./src/server/matchesPerYear");
const { matchesPerTeamPerYear } = require("./src/server/matchesPerTeamPerYear");
const { extraRunsConceded } = require("./src/server/extraRunsConceded");
const { topTenBowler2015 } = require("./src/server/topTenBowler2015");

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
