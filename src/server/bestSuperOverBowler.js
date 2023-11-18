function bestSuperOverBowler(deliveries) {
  const dummyData = deliveries.reduce((acc, delivery) => {
    if (delivery.is_super_over === "0") return acc;

    if (!acc[delivery.bowler]) {
      acc[delivery.bowler] = { runs: 0, balls: 0, economy: 0 };
    }

    acc[delivery.bowler].runs +=
      parseInt(delivery.batsman_runs) +
      parseInt(delivery.noball_runs) +
      parseInt(delivery.wide_runs);

    if (delivery.wide_runs === "0" && delivery.noball_runs === "0") {
      acc[delivery.bowler].balls++;
    }

    acc[delivery.bowler].economy =
      (acc[delivery.bowler].runs / acc[delivery.bowler].balls) * 6;

    return acc;
  }, {});

  let ans = [];
  let min = 100;

  for (let bowl in dummyData) {
    if (dummyData[bowl].economy == min) {
      ans.push({ bowler: bowl, economy: dummyData[bowl].economy });
    }
    if (dummyData[bowl].economy < min) {
      min = dummyData[bowl].economy;
      ans = [];
      ans.push({ bowler: bowl, economy: dummyData[bowl].economy });
    }
  }
  return ans;
}
module.exports.bestSuperOverBowler = bestSuperOverBowler;
