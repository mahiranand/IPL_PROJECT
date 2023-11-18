function tossAndMatchWin(matches) {
  const ans = matches.reduce((acc, match) => {
    if (match.winner === match.toss_winner) {
      if (acc[match.winner]) {
        acc[match.winner] += 1;
      } else {
        acc[match.winner] = 1;
      }
    }
    return acc;
  }, {});
  return ans;
}
module.exports.tossAndMatchWin = tossAndMatchWin;
