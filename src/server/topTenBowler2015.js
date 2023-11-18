function topTenBowler2015(matches, deliveries) {
  const idSeasonMap = matches.reduce((acc, match) => {
    acc[match["id"]] = match["season"];
    return acc;
  }, {});

  const bowlerList = deliveries.reduce((acc, delivery) => {
    if (idSeasonMap[delivery["match_id"]] !== "2015") return acc;

    if (!acc[delivery["bowler"]]) {
      acc[delivery["bowler"]] = { runs: 0, balls: 0 };
    }

    acc[delivery["bowler"]].runs +=
      parseInt(delivery["batsman_runs"]) +
      parseInt(delivery["noball_runs"]) +
      parseInt(delivery["wide_runs"]);

    if (
      parseInt(delivery["wide_runs"]) > 0 ||
      parseInt(delivery["noball_runs"]) > 0
    ) {
      return acc;
    }

    acc[delivery["bowler"]]["balls"]++;
    return acc;
  }, {});

  let arr = [];

  for (let bowler in bowlerList) {
    arr.push({
      bowler: bowler,
      economy: ((bowlerList[bowler].runs / bowlerList[bowler].balls) * 6).toFixed(2),
    });
  }

  const ans = arr.sort((a, b) => a.economy - b.economy).slice(0, 10);

  return ans;
}
module.exports.topTenBowler2015 = topTenBowler2015;
