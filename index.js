const  matches = require('./src/data/matches.json');
const fs = require('fs');
const { matchesPerYear } = require("./src/server/matchesPerYear");
const { matchesPerTeamPerYear } = require('./src/server/matchesPerTeamPerYear');


const ans1 = matchesPerYear(matches);
fs.writeFileSync('./src/public/output/matchesPerYear.json',JSON.stringify(ans1));

const ans2 = matchesPerTeamPerYear(matches);
fs.writeFileSync('./src/public/output/matchesPerTeamPerYear.json',JSON.stringify(ans2));