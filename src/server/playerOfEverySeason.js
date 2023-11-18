function playerOfEverySeason(matches) {
  const seasonPlayerList = matches.reduce((acc, match) => {
    if (acc[match.season]) {
      if (acc[match.season][match.player_of_match]) {
        acc[match.season][match.player_of_match] += 1;
      } else {
        acc[match.season][match.player_of_match] = 1;
      }
    } else {
      acc[match.season] = {};
      acc[match.season][match.player_of_match] = 1;
    }
    return acc;
  }, {});
  const ans = {};

  for (let year in seasonPlayerList) {
    ans[year] = {};
    let max = 0;
    for (let player in seasonPlayerList[year]) {
      if (seasonPlayerList[year][player] == max) {
        ans[year][player] = seasonPlayerList[year][player];
      }
      if (seasonPlayerList[year][player] > max) {
        max = seasonPlayerList[year][player];
        ans[year] = {};
        ans[year][player] = seasonPlayerList[year][player];
      }
    }
  }
  return ans;
}
module.exports.playerOfEverySeason = playerOfEverySeason;
