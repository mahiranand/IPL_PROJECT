function matchesPerYear(matches) {
  const ans = matches
    .map((match) => match.season)
    .reduce((acc, season) => {
      if (acc[season]) {
        acc[season] += 1;
      } else {
        acc[season] = 1;
      }
      return acc;
    }, {});
  return ans;
}
module.exports.matchesPerYear = matchesPerYear;
