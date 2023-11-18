function extraRunsConceded(matches, deliveries) {
  const idSeasonMap = matches.reduce((acc, match) => {
    acc[match.id] = match.season;
    return acc;
  }, {});

  const ans = deliveries.reduce((acc, delivery) => {
    if (idSeasonMap[delivery.match_id] === "2016") {
      if (acc[delivery.bowling_team]) {
        acc[delivery.bowling_team] += parseInt(delivery.extra_runs);
      } else {
        acc[delivery.bowling_team] = parseInt(delivery.extra_runs);
      }
    }
    return acc;
  }, {});
  return ans;
}
module.exports.extraRunsConceded = extraRunsConceded;
