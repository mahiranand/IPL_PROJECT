const  matches = require('./src/data/matches.json');
const fs = require('fs');
const { matchesPerYear } = require("./src/server/matchesPerYear");


const ans1 = matchesPerYear(matches);
fs.writeFileSync('./src/public/output/matchesPerYear.json',JSON.stringify(ans1));
