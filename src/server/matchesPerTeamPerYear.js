function matchesPerTeamPerYear(matches) {
  const ans = matches.reduce((acc, match) => {
      if (acc[match.season]) {
        if (acc[match.season][match.winner]) {
            acc[match.season][match.winner] += 1;
        } else {
            acc[match.season][match.winner] = 1;
        }
      }else{
        acc[match.season] = {};
        acc[match.season][match.winner] = 1;
      }
      return acc;
    }, {});
  return ans;
}
module.exports.matchesPerTeamPerYear = matchesPerTeamPerYear;
