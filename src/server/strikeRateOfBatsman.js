function strikeRateOfBatsman(matches, deliveries, player = "") {
  if (player === "") {
    return {};
  }
  const idSeasonMap = matches.reduce((acc, cv) => {
    acc[cv["id"]] = cv["season"];
    return acc;
  }, {});
  const ans = deliveries.reduce((acc, delivery) => {
    if (delivery.batsman === player) {
      const season = idSeasonMap[delivery.match_id];
      if (!acc[season]) acc[season] = { runs: 0, balls: 0, strike_rate: 0 };

      acc[season].runs += parseInt(delivery.batsman_runs);

      if (
        parseInt(delivery["wide_runs"]) > 0 ||
        parseInt(delivery["noball_runs"]) > 0
      ) {
        acc[season].strike_rate = (
          (acc[season].runs / acc[season].balls) *
          100
        ).toFixed(2);
      } else {
        acc[season].balls++;
        acc[season].strike_rate = (
          (acc[season].runs / acc[season].balls) *
          100
        ).toFixed(2);
      }
    }
    return acc;
  }, {});
  return ans;
}

module.exports.strikeRateOfBatsman = strikeRateOfBatsman;
